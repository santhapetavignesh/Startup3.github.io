import express from "express";
import chalk from "chalk";
import cors from 'cors';
import dotenv, { config } from 'dotenv';
import morgan from "morgan";
import mongoose from "mongoose";
import database from "./Schema/shop.js";
import database1 from './Schema/related.js';
import database3 from './Schema/cart.js'

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
dotenv.config({path:"config.env"});

const port=process.env.PORT;
const host=process.env.HOST_NAME;
const mongo_url=process.env.MONGO_URL;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("data base is connected")
}).catch((err)=>{
    console.log(err)
})

app.get("/",async (req,res)=>{
    const data= await database.find()
    res.send(data)
})
app.post("/Related/:ename",async (req,res)=>{
    try{
        let ename=req.params.ename;
        let users= await database.find()
        let data= users.filter((val)=>{
            if(val.Category==ename){
                return val
            }
        })
        res.send(data);
    }
    catch(err){
        res.status(500).json({"msg":"Error"})
    }      
})

app.post("/Recently/:ename",async (req,res)=>{
    try{
        let ename=parseInt(req.params.ename);
        let users= await database.find()
        let data= users.filter((val)=>{
            if(val.id==ename){
                return val
            }
        }) 
        data.filter((val)=>{
         let  userdata=new database1({id:val.id,
                product_Name:val.product_Name,
                product_image:val.product_image,
                old_price:val.old_price,
                new_price:val.new_price,
                rating:val.rating })
        userdata.save()    
        })
        res.send(data);
    }
    catch(err){
        res.status(500).json({"msg":"Error"})
    }      
})

app.get("/recent/all",async(req,res)=>{
    const relateddata= await database1.find()
    res.send(relateddata)
})


app.post("/cart/:ename",async (req,res)=>{

    try{
        let ename=parseInt(req.params.ename);
        let users= await database.find()
        let data= users.filter((val)=>{
            if(val.id==ename){
                return val
            }
        }) 
        data.filter((val)=>{
         let  userdata=new database3({id:val.id,
                product_Name:val.product_Name,
                product_image:val.product_image,
                old_price:val.old_price,
                new_price:val.new_price,
                rating:val.rating })
        userdata.save()    
        })
        res.send(data);
    }
    catch(err){
        res.status(500).json({"msg":"Error"})
    }
})

app.get("/cart/all",async (req,res)=>{
    let data = await database3.find();
    res.send(data)
})

app.delete("/delete/cart/:ename",async(req,res)=>{
    let prodid=req.params.ename;
    try{
        console.log(prodid)
           let product =await database3.findById(prodid)
           if(!product){
            console.log("first","no products")
            return response.status(401).json({message:"No product found"})
           }
          
           await database3.findByIdAndDelete(prodid)      
    }
    catch(err){
        console.log(err)
    }
})

app.get("/veiwproduct/all/:ename",async(req,res)=>{
        let data=parseInt(req.params.ename);

        let data1= await database.find();

        let data2= data1.filter((val)=>{
                if (val.id==data){
                    return val;
                }
        })
        res.send(data2)
})

app.listen(port,host,(err)=>{
    if (err) throw err;
    console.log(`Server is started running on http://${host}:${port}`);
})


