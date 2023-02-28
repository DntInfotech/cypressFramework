const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:
    {
        user: 'roshanmorkhade96@gmail.com',
        pass: 'bzgbtvgwkzmjphfz'
    }
});

transporter.sendMail({
    to: "prajapatikalpesh8910@gmail.com",
    from: 'roshanmorkhade96@gmail.com',
    subject: 'The html file',
    attachments:{
        filename: 'index.html',
        path: './index.html'
    }
});