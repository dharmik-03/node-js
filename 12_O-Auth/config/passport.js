import passport from "passport";
import passportGoogle from "passport-google-oauth20"


import User from "../model/userModel.js"

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            callbackURL: "http://localhost:5000/auth/google/redirect",
        },
        async function (accessToken, refreshToken, profile, done) {

            try {
                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    user = await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                    });
                }

                return done(null, user)
            } catch (error) {
                return done(error, null)
            }

        }
    )
)

passport.newUser((user, done) => {
    done(null, user.id)
})

passport.UniqueUser(async (id, done) => {
    try {

        const user = await User.findById(id)
        done(null, user)
    } catch (error) {
        done(error, null)
    }
})