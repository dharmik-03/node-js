import express from "express"
import connectDB from "./config/DB.js"

import dotenv from "dotenv"
import httpError from "./middlewares/httpError.js"

import authRouter from "./routes/authRouter.js"

dotenv.config({ path: "./.env" })

const app = express()


app.use(express.json())
app.use("/auth", authRouter)



app.set("view engine", "ejs")

app.get("/", (req, res, next) => {

    res.render("home")

})


app.use((req, res, next) => {
    return next(new httpError("requested route not found"))
})

app.use((error, req, res, next) => {


    if (res.headersSent) {
        return next(new httpError(error.message))
    }

    res.status(error.statusCode || 500).json({ message: error.message || "internal server error" })

})



const port = process.env.PORT || 5000

async function StartServer() {

    try {
        const connect = await connectDB()
        if (!connect) {
            return console.log("connect to failed DB")
        }

        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)
            }

            console.log(`server is running on port ${port}`)
        })


    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}
StartServer()