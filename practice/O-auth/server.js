import express from "express"
import httpError from "./middlewares/httpError.js"
import connectDB from "./config/DB.js"
import router from "./routes/AuthRouter.js"

import passport from "./config/passport.js"
import session from "express-session"
import ProfileRouter from "./routes/profileRoute.js"

import dotenv from "dotenv"


dotenv.config({ path: "./.env" })


const app = express()

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        }
    })
)

app.use(passport.initialize());
app.use(passport.session())

app.use(express.json())
app.use("/auth", router)
app.use("/profile",ProfileRouter)



app.set("view engine", "ejs")

app.get("/", (req, res, next) => {

    res.render("home",{
        user:req.user
    })

})

app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "requested route not found" })
})

app.use((error, req, res, next) => {

    if (res.headersSent) {
        return next(new httpError(error.message))
    }

    res.status(error.statusCode || 500).json({ message: error.message || "internal server error" })
})

const port = 5000



async function StartServer(req, res, next) {

    try {
        const connect = await connectDB()

        if (!connect) {
            return console.log("failed to conect DB")
        }

        app.listen(port, (err) => {
            if (err) {
                return console.log(error.message)
            }

            console.log(`server running on port ${port}`)
        })


    } catch (error) {
        console.log(error.message)
        process.exit(1)

    }

}

StartServer()