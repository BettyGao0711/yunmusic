const Koa=require('koa2');

const app=new Koa();

const router=require('../router');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mymusic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>{
  console.log('mongoose连接成功了')
});

router(app);

// app.use((ctx)=>{
//   ctx.body="hello world"
// })

app.listen(4000,()=>{
    console.log('server is listenning')
})
