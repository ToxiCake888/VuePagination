import { createRequire } from "module";
const require = createRequire(import.meta.url);

const cors = require('cors');
const{Client}=require('pg')
const express=require('express')
const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json())
const Dbconnection=new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"admin",
    database:"postsDB",
})

Dbconnection.connect().then(()=>console.log("db connected"))

app.get('/getData',(req,res)=>{
    const fetch_query="select * from posts"
    Dbconnection.query(fetch_query,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result.rows);
        }
    })
})

app.post('/postData',(req,res)=>{
    const{title,body}=req.body

    const insert_query= 'INSERT INTO posts (title,body) VALUES ($1,$2)'

    Dbconnection.query(insert_query, [title,body],(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send('data posted');
            console.log(result)
        }
    })

})

app.listen(3000, ()=>{console.log('server runnin')})    