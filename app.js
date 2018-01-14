const express=require('express');

const app=express();
port=process.env.PORT||3000;
app.set('view engine','ejs');


app.get('/',(req,res)=>{
  res.render('home');
})

app.listen(port,process.env.IP,()=>{
  console.log(`Starting app at ${port}`);
});
