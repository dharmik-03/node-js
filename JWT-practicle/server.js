import express from "express";
import httpError from "./middlewares/httpError.js";
import connectDB from "./config/DB.js"
import router from "./router/userRoute.js";

import dotenv from "dotenv"

dotenv.config({path:"./.env"})

const app = express()

app.use(express.json())

app.use("/user",router)

app.get("/", (req, res, next) => {
    res.json("hello from server")
})

app.use((req, res, next) => {

    res.status(404).json({ success: true, message: "requsted route not found" })

})

app.use((error, req, res, next) => {

    if (res.headersSent) {
        return next(new httpError(error.message))
    }

    res.status(error.statusCode || 500).json({ message: error.message || "internal server error" })

})

const port = 5000

async function startServer(req, res, next) {

    try {

        const connect = await connectDB()
        if (!connect) {
            return console.log("failed to connect DB")
        }


        app.listen(port, (err) => {
            if (err) {
                console.log(err.message)
            }

            console.log(`server is running on port ${port}`)
        })


    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }

}

startServer()