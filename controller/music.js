// 处理音乐歌单
const Music=require('../model/music');

// 数据
const musicData=require('./musicjsonresolver');

class MusicPlay {
    // 获取音乐歌单
    async playList(ctx){
      // const res=await Music.find();
      ctx.body=JSON.stringify(musicData);
    }
}

module.exports=new MusicPlay();