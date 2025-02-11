const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const Gonulluler = require('./modules/gonulluler');
const Kullanicilar = require('./modules/kullanıcılar');
const Yemekler = require('./modules/yemekler');

const app = express();
const PORT = process.env.PORT || 5000; 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions)); 



app.get('/', (req, res) => {
    res.send('Merhaba Dünya! Express.js ile Node.js sunucusuna hoş geldiniz.');
});

app.post('/api/kullanici-kayit', async (req, res) => {
    try {
        const { isim, soyisim, telefon, cinsiyet, email, sifre } = req.body;

        const yeniKullanici = new Kullanicilar({
            isim,
            soyisim,
            telefon,
            cinsiyet,
            email,
            sifre,
        });

        await yeniKullanici.save();

        res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kullanıcı kaydedilirken bir hata oluştu.' });
    }
});

app.post('/api/gonullukayit', async (req, res) => {
    try {
        const { isim, soyisim, telefon, cinsiyet, email, sifre } = req.body;

        const yeniGonullu = new Gonulluler({
            isim,
            soyisim,
            telefon,
            cinsiyet,
            email,
            sifre,
        });

        await yeniGonullu.save();

        res.status(202).json({ message: 'Gönüllü başarıyla kaydedildi.' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Gönüllü kaydedilirken bir hata oluştu.' });
    }
});

app.post('/api/giris', async (req, res) => {
    try {
        const { email, sifre } = req.body;
        console.log('Giriş denemesi:', email, sifre); // Hata ayıklama için log ekleyelim

        let kullanici = await Gonulluler.findOne({ email });
        let rol = 'Gönüllü';

        if (!kullanici) {
            kullanici = await Kullanicilar.findOne({ email });
            rol = 'Kullanıcı';
        }

        if (kullanici && kullanici.sifre === sifre) {
            res.status(200).json({ message: `Başarıyla giriş yaptınız. Rol: ${rol}` });
        } else {
            res.status(401).json({ message: 'E-posta veya şifre yanlış. Lütfen tekrar deneyin.' });
        }
    } catch (error) {
        console.error('Giriş işlemi sırasında bir hata oluştu:', error);
        res.status(500).json({ message: 'Giriş işlemi sırasında bir hata oluştu.' });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

app.post('/api/yemek-yukle', upload.single('resim'), async (req, res) => {
    try {
        const { yemekAdi, yemekTarifi, yemekMalzemeleri, mailAdresi, gonulluId,yemekAdresi } = req.body;
        const resimUrl = '/uploads/' + req.file.filename;

        const yeniYemek = new Yemekler({
            yemekAdi,
            yemekTarifi,
            yemekMalzemeleri,
            mailAdresi,
            gonulluId, 
            yemekAdresi,
            resimUrl
        });

        await yeniYemek.save();

        res.status(201).json({ message: 'Yemek başarıyla yüklendi.' });
    } catch (error) {
        console.error('Yemek yükleme hatası:', error);
        res.status(500).json({ message: 'Yemek yükleme sırasında bir hata oluştu.' });
    }
});

app.get('/api/yemekler', async (req, res) => {
    try {
        const yemekler = await Yemekler.find().populate('gonulluId');
        res.json(yemekler);
    } catch (error) {
        console.error('Yemekler alınırken hata oluştu:', error);
        res.status(500).json({ message: 'Yemekler alınırken bir hata oluştu.' });
    }
}); 
app.delete('/api/yemek-sil/:id', async (req, res) => {
    try {
        const yemekId = req.params.id;
        await Yemekler.findByIdAndDelete(yemekId);
        res.status(200).json({ message: 'Yemek başarıyla silindi.' });
    } catch (error) {
        console.error('Yemek silme hatası:', error);
        res.status(500).json({ message: 'Yemek silme sırasında bir hata oluştu.' });
    }
});


require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB'ye başarıyla bağlandı"))
  .catch(err => console.error("MongoDB bağlantı hatası:", err));

 



 