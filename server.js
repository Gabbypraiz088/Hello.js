require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.json()) // inbuilt middleware

app.use((req, res, next) => { // Personalised/customised middleware 
    //logs every request
    console.log('${req.method} ${req.url} - ${new Date()}');
    next(); //pass to next handler {requred!}
});
 
app.post('/echo', (req, res) => {
res.json({ echoed: req.body}); //req.body now available
});


app.get('/', (req, res) => {
  res.send('Hello From Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
