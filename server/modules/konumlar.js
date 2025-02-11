const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const konumSchema = new Schema ({ 

    adres: {  
        type: String ,
        require : true  
    }, 
    sehir: {  
        type: String ,
        require : true  
    },  
    ilce: {  
        type: String ,
        require : true  
    }, 

     kullanıcıId:{ 
        type:Schema.Types.ObjectId,
        ref:'Kullanıcılar',
        require:true,
     } ,
    gonulluId:{  
        type:Schema.Types.ObjectId,
        ref: 'Gonulluler',
        require:true,

    },  
    sanalDepoId:{
        type:Schema.Types.ObjectId,
        ref:'Sanal Depolar', 
        require:true,
    }


 } , {  
      collection:'konumlar',
      timestamps:true ,
})
const Konumlar = mongoose.model('Konumlar' , konumSchema) // çıktı almak için modüllerden yararlanıyoruz  
module.exports = Konumlar