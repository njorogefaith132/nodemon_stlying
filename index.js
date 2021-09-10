const express = require('express');
const sendEmail = require('./main');

const app = express();

const PORT = 5000;


app.get('/', (req, res) =>{
    res.send('Hello');
})

app.get('/send', async (req, res) =>{

    const message ={
        from: 
        {
            name: 'Faith Lmt',
            address: 'techile@outlook.com'
        },
        to: 'wairimunjoroge132@gmail.com',
        subject: 'Agreement status',
        html: `
        <div>
            <h3 style="color: yellow">Dear Client,</h3>
            <p style="color: blue; font-size:25px;">This is an example of our designs</p>
            <img style="width:300px; height:250px" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1090&fit=crop&crop=faces" alt="web design" />
        
        </div>
        `,
        attachments:[
            {
                filename:'clientagreement.text',
                content: 'Sign the Agreement'
            }
        ]
    }
    try {
        await sendEmail(message)
        res.send('Email sent');
        
    } catch (error) {
        console.log(error);
        res.send('Error, sending email. Try again')
        
    }

})

app.listen(PORT ,() => {
    console.log(`App listening on port ${PORT}`);
})