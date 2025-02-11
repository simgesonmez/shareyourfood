const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const yemekSchema = new Schema ({ 

    yemekAdi: {  
        type: String ,
        require : true  
    },
    yemekTarifi: { 
        type: String , 
        require : true 
    } , 

    yemekMalzemeleri:{ 
        type:String, 
        require:true, 
    } , 
   yemekAdresi:{ 
        type:String, 
        require:true, 
    } ,
   
    mailAdresi:{ 
        type:String,
        require:true,
    } , 
    gonulluId:{  
        type:Schema.Types.ObjectId,
        ref: 'Gonulluler',
        require:true,

    },
    resimUrl: {
        type: String,
        required: true,
      }

 } , {  
      collection:'yemekler',
      timestamps:true 
})
const Yemekler = mongoose.model('Yemekler' , yemekSchema) // çıktı almak için modüllerden yararlanıyoruz  
module.exports = Yemekler