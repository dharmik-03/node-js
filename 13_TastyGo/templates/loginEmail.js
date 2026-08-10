const loginEmail = (name) => {
  return `
<tr>
  <td align="center">
    <table width="600" cellpadding="0" cellspacing="0" border="0"
      style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">

      <tr>
        <td align="center"
          style="background-color:#ff5a36;padding:30px 20px;">

          <h1 style="margin:0;color:#ffffff;font-size:32px;font-weight:700;letter-spacing:-1px;">
            TastyGO
          </h1>

          <p style="margin:8px 0 0;color:#ffffff;font-size:14px;">
            Good food. Great moments.
          </p>

        </td>
      </tr>

      <tr>
        <td style="padding:40px 35px 20px;">

          <p style="margin:0 0 10px;font-size:15px;color:#666666;">
            Hey ${name}! 👋
          </p>

          <h2 style="margin:0 0 15px;font-size:28px;line-height:1.3;color:#222222;">
            Welcome Back! 🎉
          </h2>

          <p style="margin:0;font-size:16px;line-height:1.7;color:#555555;">
            You have successfully logged in to your TastyGO account.
            We're happy to see you again! Get ready to discover
            delicious food and order your favorite meals.
          </p>

        </td>
      </tr>

      <tr>
        <td style="padding:15px 35px 25px;">

          <table width="100%" cellpadding="0" cellspacing="0"
            style="background-color:#fff7f4;border-radius:12px;border:1px solid #ffe1d9;">

            <tr>
              <td style="padding:20px;">

                <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#222222;">
                  ✅ Login Successful
                </p>

                <p style="margin:0;font-size:14px;line-height:1.6;color:#666666;">
                  Your TastyGO account was successfully accessed.
                  You can now browse restaurants, order food,
                  and manage your account.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>

      <tr>
        <td style="padding:5px 35px 25px;">

          <h3 style="margin:0 0 20px;font-size:20px;color:#222222;">
            What's waiting for you? 🍽️
          </h3>

          <table width="100%" cellpadding="0" cellspacing="0"
            style="margin-bottom:15px;">

            <tr>
              <td width="50" valign="top">

                <div style="width:40px;height:40px;line-height:40px;text-align:center;background-color:#fff1ed;border-radius:10px;font-size:20px;">
                  🍔
                </div>

              </td>

              <td style="padding-left:12px;">

                <strong style="font-size:15px;color:#222222;">
                  Explore Food
                </strong>

                <p style="margin:5px 0 0;font-size:14px;line-height:1.5;color:#777777;">
                  Discover delicious dishes and restaurants around you.
                </p>

              </td>
            </tr>

          </table>

          <table width="100%" cellpadding="0" cellspacing="0"
            style="margin-bottom:15px;">

            <tr>
              <td width="50" valign="top">

                <div style="width:40px;height:40px;line-height:40px;text-align:center;background-color:#fff1ed;border-radius:10px;font-size:20px;">
                  🛵
                </div>

              </td>

              <td style="padding-left:12px;">

                <strong style="font-size:15px;color:#222222;">
                  Order Your Favorites
                </strong>

                <p style="margin:5px 0 0;font-size:14px;line-height:1.5;color:#777777;">
                  Order your favorite meals quickly and easily.
                </p>

              </td>
            </tr>

          </table>

          <table width="100%" cellpadding="0" cellspacing="0">

            <tr>
              <td width="50" valign="top">

                <div style="width:40px;height:40px;line-height:40px;text-align:center;background-color:#fff1ed;border-radius:10px;font-size:20px;">
                  📦
                </div>

              </td>

              <td style="padding-left:12px;">

                <strong style="font-size:15px;color:#222222;">
                  Track Your Orders
                </strong>

                <p style="margin:5px 0 0;font-size:14px;line-height:1.5;color:#777777;">
                  Keep track of your orders from restaurant to doorstep.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>

      <tr>
        <td align="center" style="padding:10px 35px 40px;">

          <p style="margin:0 0 20px;font-size:16px;color:#555555;">
            Hungry already? 😋
          </p>

          <a href="https://your-tastygo-website.com"
            style="display:inline-block;background-color:#ff5a36;color:#ffffff;text-decoration:none;padding:15px 32px;border-radius:8px;font-size:15px;font-weight:700;">
            Order Now →
          </a>

        </td>
      </tr>

      <tr>
        <td style="padding:22px 35px;background-color:#fffaf8;border-top:1px solid #f1f1f1;">

          <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#444444;">
            🔐 Security Notice
          </p>

          <p style="margin:0;font-size:12px;line-height:1.6;color:#888888;">
            If you did not log in to your TastyGO account,
            please secure your account and contact us immediately.
          </p>

        </td>
      </tr>

      <tr>
        <td style="padding:25px 35px;background-color:#fafafa;text-align:center;">

          <p style="margin:0 0 8px;font-size:14px;color:#555555;">
            Great to have you back at TastyGO ❤️
          </p>

          <p style="margin:0;font-size:13px;color:#999999;">
            Good food. Great moments. Delivered.
          </p>

        </td>
      </tr>

      <tr>
        <td align="center" style="padding:20px;">

          <p style="margin:0;font-size:12px;color:#999999;">
            © 2026 TastyGO. All rights reserved.
          </p>

          <p style="margin:8px 0 0;font-size:12px;color:#999999;">
            This email was sent because your TastyGO account was accessed.
          </p>

        </td>
      </tr>

    </table>
  </td>
</tr>
`;
};

export default loginEmail;