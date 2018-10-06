module.exports = ({ company }) => {
  if (company) {
    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
      <html>
        <head>

        </head>
        <body style="margin:0;padding:50px 0px;box-sizing:border-box;background-color:#F6F7F9;font-family:'Avenir Next', 'Helvetica Neue', 'Helvetica', 'Arial';">
          <div class="mail" style="margin:0;padding:0;box-sizing:border-box;padding:100px 60px 80px;max-width:580px;width:100%;margin-left:auto;margin-right:auto;background-color:#ffffff;box-shadow:0 4px 10px rgba(0, 0, 0, .1);border-radius:4px;text-align:center;margin-top:100px;">
            <h1 style="margin:0;padding:0;box-sizing:border-box;text-align:center;margin-bottom:48px;font-size:20px;letter-spacing:5px;text-transform:uppercase;color:#111111;">Thanks for joining!</h1>
            <p style="margin:0;padding:0;box-sizing:border-box;font-size:20px;line-height:35px;color:#888888;margin-bottom:25px;text-align:left;">We at ${company} are working hard to deliver a production-ready product.</p>
            <p style="margin:0;padding:0;box-sizing:border-box;font-size:20px;line-height:35px;color:#888888;margin-bottom:25px;text-align:left;">We appreaciate your interest and support in our beta phase. We'll be rolling out invites soon!</p>
          </div>
        </body>
      </html>
    `
  }

  throw Error('Company is required')
}
