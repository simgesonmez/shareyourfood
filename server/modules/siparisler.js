const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const siparisSchema = new Schema ({ 

    siparisTarihi: {  
        type: String ,
        require : true  ,
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
    yemekId:{  
        type:Schema.Types.ObjectId,
        ref: 'Yemekler',
        require:true,

    },
    konumId:{  
        type:Schema.Types.ObjectId,
        ref: 'Konumlar',
        require:true,

    }, 
    sanalDepoId:{
        type:Schema.Types.ObjectId,
        ref:'Sanal Depolar', 
        require:true,
    }
 } , {  
      collection:'siparisler',
      timestamps:true 
})
const Siparisler = mongoose.model('Siparisler' , siparisSchema) // çıktı almak için modüllerden yararlanıyoruz  
module.exports = Siparisler