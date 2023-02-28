after(function(){
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
        from: 'roshanmorkhade96@gmail.com',
        to: "kritikagaur941@com.com",
        subject: 'The html file',
        attachments:{
            filename: 'index.html',
            path: './index.html'
        }
    });
   
})