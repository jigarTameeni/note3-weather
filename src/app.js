const path = require('path')


const express = require('express')

const app = express()

const port = process.env.PORT || 3000


//console.log(path.join(__dirname,'../public'))

//app.use(express.static(path.join(__dirname,'../public')))

app.get('/get',(req,res) => {

    res.send('{"name":"jigar"}')
        

})


// app.get('/about',(req,res)=>{
//     res.send('about')
// })

// app.get('/weather',(req,res)=>{
//    res.send({
//        type:'Cel',
//        value:'val'
//    })
// })

app.listen(port,()=>{
    console.log("server started")
})