const path = require('path')


const express = require('express')

const app = express()


console.log(path.join(__dirname,'../public'))

app.use(express.static(path.join(__dirname,'../public')))

// app.get('/get',(req,res) => {

//     res.send('<h1>Header</h1>')
        

// })


// app.get('/about',(req,res)=>{
//     res.send('about')
// })

// app.get('/weather',(req,res)=>{
//    res.send({
//        type:'Cel',
//        value:'val'
//    })
// })

app.listen(3000,()=>{
    console.log("server started")
})