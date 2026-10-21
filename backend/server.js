require('dotenv').config();
const express=require('express'); const mongoose=require('mongoose'); const cors=require('cors'); const morgan=require('morgan');
const auth=require('./routes/auth'); const issues=require('./routes/issues'); const dashboard=require('./routes/dashboard');
const app=express(); app.use(cors()); app.use(express.json({limit:'12mb'})); app.use(morgan('dev'));
app.get('/api/health',(req,res)=>res.json({ok:true})); app.use('/api/auth',auth); app.use('/api/issues',issues); app.use('/api/dashboard',dashboard);
const PORT=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/civicconnect').then(()=>app.listen(PORT,()=>console.log('CivicConnect API running on '+PORT))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1)});
