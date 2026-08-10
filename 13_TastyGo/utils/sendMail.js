import transporter from "../config/email.js"

const sendMail = async ({ to, subject, html }) => {

    try {

        const info = await transporter.sendMail({
            from: 'tasty GO "dharmik161616@gmail.com"',
            to,
            subject,
            html
        })

        console.log("Message sent: %s", info.messageId);

    } catch (error) {
        console.log(error.message)
    }

}

export default sendMail