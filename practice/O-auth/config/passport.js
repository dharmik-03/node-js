import passport from "passport";
import googlePassport from "passport-google-oauth20";

import User from "../model/userModel.js"

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
console.log("CLIENT_CALLBACK_URL:", process.env.CLIENT_CALLBACK_URL);

const googleStategy = googlePassport.Strategy

passport.use(
    new googleStategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CLIENT_CALLBACK_URL
        },
        async function (accessToken, refreshToken, profile, done) {
            try {

                const alreadyUser = await User.findOne({ googleId: profile.id });

                if (!alreadyUser) {
                    const newuser = await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0]?.value
                    })

                    return done(null, newuser)
                }

                return done(null, alreadyUser)



            } catch (error) {
                console.log(error.message)

            }
        }
    )
)


passport.serializeUser((user, done) => {
    done(null, user.id)
})


passport.deserializeUser(async function (id, done) {

    try {

        const user = await User.findById(id )

        done(null, user)


    } catch (error) {
        done(error, null)
    }

})

export default passport


