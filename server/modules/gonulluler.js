const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const gonulluSchema = new Schema ({ 

    isim: {  
        type: String ,
        required : true  
    },
    soyisim: { 
        type: String , 
        required : true 
    } , 
    telefon:{ 
        type:String,
        required: true
    } , 
    cinsiyet:{ 
        type:String, 
        required:true, 
        
    } ,
    email:{ 
        type:String,
        required:true,
    } ,
    sifre:{ 
        type:String,
        required:true,
    } 
 } , {  
      collection:'gonulluler',
      timestamps:true 

}) // hangi zaman dilimi 
 const Gonulluler = mongoose.model('Gonulluler' , gonulluSchema) // çıktı almak için modüllerden yararlanıyoruz  
 module.exports = Gonulluler 