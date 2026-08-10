const welcomeEmail = (name) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Welcome to TastyGO</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f5f6f8;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color: #f5f6f8; padding: 40px 15px;">

    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="
            max-width: 600px;
            width: 100%;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
          ">

          <!-- Header -->
          <tr>
            <td align="center"
              style="
                background-color: #ff5a36;
                padding: 30px 20px;
              ">

              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 32px;
                font-weight: 700;
                letter-spacing: -1px;
              ">
                TastyGO
              </h1>

              <p style="
                margin: 8px 0 0;
                color: #ffffff;
                font-size: 14px;
              ">
                Good food. Great moments.
              </p>

            </td>
          </tr>

          <!-- Welcome Section -->
          <tr>
            <td style="padding: 40px 35px 20px;">

              <p style="
                margin: 0 0 10px;
                font-size: 15px;
                color: #666666;
              ">
                Hey ${name}! 👋
              </p>

              <h2 style="
                margin: 0 0 15px;
                font-size: 28px;
                line-height: 1.3;
                color: #222222;
              ">
                Welcome to TastyGO 🎉
              </h2>

              <p style="
                margin: 0;
                font-size: 16px;
                line-height: 1.7;
                color: #555555;
              ">
                We're excited to have you with us! TastyGO makes it easy
                to discover amazing restaurants, explore delicious food,
                and order your favorite meals from the comfort of your home.
              </p>

            </td>
          </tr>

          <!-- Features -->
          <tr>
            <td style="padding: 10px 35px 25px;">

              <h3 style="
                margin: 0 0 20px;
                font-size: 20px;
                color: #222222;
              ">
                Everything you need, in one place 🍽️
              </h3>

              <!-- Feature 1 -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="margin-bottom: 15px;">

                <tr>
                  <td width="50" valign="top">
                    <div style="
                      width: 40px;
                      height: 40px;
                      line-height: 40px;
                      text-align: center;
                      background-color: #fff1ed;
                      border-radius: 10px;
                      font-size: 20px;
                    ">
                      🍔
                    </div>
                  </td>

                  <td style="padding-left: 12px;">
                    <strong style="
                      font-size: 15px;
                      color: #222222;
                    ">
                      Discover Restaurants
                    </strong>

                    <p style="
                      margin: 5px 0 0;
                      font-size: 14px;
                      line-height: 1.5;
                      color: #777777;
                    ">
                      Find restaurants and discover new dishes you'll love.
                    </p>
                  </td>
                </tr>

              </table>

              <!-- Feature 2 -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="margin-bottom: 15px;">

                <tr>
                  <td width="50" valign="top">
                    <div style="
                      width: 40px;
                      height: 40px;
                      line-height: 40px;
                      text-align: center;
                      background-color: #fff1ed;
                      border-radius: 10px;
                      font-size: 20px;
                    ">
                      🛵
                    </div>
                  </td>

                  <td style="padding-left: 12px;">
                    <strong style="
                      font-size: 15px;
                      color: #222222;
                    ">
                      Easy Food Ordering
                    </strong>

                    <p style="
                      margin: 5px 0 0;
                      font-size: 14px;
                      line-height: 1.5;
                      color: #777777;
                    ">
                      Order your favorite meals quickly and easily.
                    </p>
                  </td>
                </tr>

              </table>

              <!-- Feature 3 -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td width="50" valign="top">
                    <div style="
                      width: 40px;
                      height: 40px;
                      line-height: 40px;
                      text-align: center;
                      background-color: #fff1ed;
                      border-radius: 10px;
                      font-size: 20px;
                    ">
                      📦
                    </div>
                  </td>

                  <td style="padding-left: 12px;">
                    <strong style="
                      font-size: 15px;
                      color: #222222;
                    ">
                      Track Your Orders
                    </strong>

                    <p style="
                      margin: 5px 0 0;
                      font-size: 14px;
                      line-height: 1.5;
                      color: #777777;
                    ">
                      Stay updated and keep track of your orders.
                    </p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding: 10px 35px 40px;">

              <p style="
                margin: 0 0 20px;
                font-size: 16px;
                color: #555555;
              ">
                Ready to satisfy your cravings?
              </p>

              <a href="https://your-tastygo-website.com"
                style="
                  display: inline-block;
                  background-color: #ff5a36;
                  color: #ffffff;
                  text-decoration: none;
                  padding: 15px 32px;
                  border-radius: 8px;
                  font-size: 15px;
                  font-weight: 700;
                ">
                Explore TastyGO →
              </a>

            </td>
          </tr>

          <!-- Bottom Message -->
          <tr>
            <td style="
              padding: 25px 35px;
              background-color: #fafafa;
              text-align: center;
            ">

              <p style="
                margin: 0 0 8px;
                font-size: 14px;
                color: #555555;
              ">
                Thank you for choosing TastyGO ❤️
              </p>

              <p style="
                margin: 0;
                font-size: 13px;
                color: #999999;
              ">
                Good food. Great moments. Delivered.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px;">

              <p style="
                margin: 0;
                font-size: 12px;
                color: #999999;
              ">
                © 2026 TastyGO. All rights reserved.
              </p>

              <p style="
                margin: 8px 0 0;
                font-size: 12px;
                color: #999999;
              ">
                This email was sent because you created an account on TastyGO.
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>

  </table>

</body>
</html>
`;
};

export default welcomeEmail