const Router = require('@koa/router');

const {playList}=require('../controller/music');

// 首页-歌单音乐
const router = new Router({
    prefix:'/music'
});

router.get('/playlist', playList);


module.exports=router;