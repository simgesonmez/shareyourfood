const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const sanalDepoSchema = new Schema ({   
    sanalDepoAdres: {  
        type: String ,
        require : true  
    },
    sanalDepoAd: { 
        type: String , 
        require : true ,
    } ,
},{
        collection:'sanalDepolar',
        timestamps:true ,

})   
const SanalDepolar = mongoose.model('SanalDepolar' , gonulluSchema) // çıktı almak için modüllerden yararlanıyoruz  
module.exports = SanalDepolar