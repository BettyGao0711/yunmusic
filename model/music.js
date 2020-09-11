const mongoose=require('mongoose');

// const Schema = mongoose.Schema;
const {Schema,model}=mongoose;

const musicSchema = new Schema({
    copywrier:{type:'string'},
    playCount:{type:'number'},
    highQuality:{type:'boolean'},
    type:{type:'number'},
    canDislike:{type:'boolean'},
    name:{type:'string'},
    alg:{type:'string'},
    // creatTime
    id:{type:'string'},
    picUrl:{type:'string'},
    trackCount:{type:'number'},
});

// const model=mongoose.model;

module.exports=model('Music',musicSchema);