const express=require('express')
const app=express()
const path=require('path')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

const connectDB=require('./config/db')
connectDB()

app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))


app.listen(process.env.PORT || 3000)