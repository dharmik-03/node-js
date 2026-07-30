import express from "express"
import httpError from "./middlewares/httpError.js"
import DBconnect from "./config/DB.js"
import userRoute from "./routes/user.routes.js"
import adminRoute from "./routes/admin.routes.js"
import blogRouter from "./routes/blog.route.js"

import dotenv from "dotenv"

dotenv.config({ path: "./.env" })

const app = express()

app.use(express.json());
app.use("/user", userRoute)
app.use("/admin", adminRoute)
app.use("/blog", blogRouter)

app.get("/", (req, res, next) => {
    res.json({ message: "hello from server" })
})

app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" })
})

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }

    res.status(error.statusCode || 500).json({ message: error.message || "internal server error" })

})

const port = 5000



async function startSerever(req, res, next) {
    try {

        const connect = await DBconnect()

        if (!connect) {
            throw new Error("Failed to connect DB");
        }

        console.log("DB connected successfully")

        app.listen(port, (err) => {
            if (err) {
                return console.log(err.message)

            }

            console.log(`server is running on port ${port}`)

        })





    } catch (error) {

        console.error(error.message);
        process.exit(1)
    }
}

startSerever()

