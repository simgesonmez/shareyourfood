const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const kullanicilarSchema = new Schema ({ 

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
 } , { collection:'kullanıcılar',
       timestamps:true
}) // hangi zaman dilimi 
 const Kullanicilar = mongoose.model('Kullanicilar' , kullanicilarSchema) // çıktı almak için modüllerden yararlanıyoruz  
 module.exports = Kullanicilar