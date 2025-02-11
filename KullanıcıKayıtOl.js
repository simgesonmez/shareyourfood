import React, {useState} from 'react'
import './KullanıcıKayıtOl.css' 
import {useNavigate} from 'react-router-dom' 
const KullanıcıKayıtOl = () => { 
  const [isim, setIsim] = useState('');
  const [soyisim, setSoyisim] = useState('');
  const [telefon, setTelefon] = useState('');
  const [cinsiyet, setCinsiyet] = useState('');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("İsim:", isim);
    console.log("Soyisim:", soyisim);
    console.log("Telefon:", telefon);
    console.log("Cinsiyet:", cinsiyet);
    console.log("Email:", email);
    console.log("Şifre:", sifre);  
    
  
    try {
      const response = await fetch('http://localhost:5000/api/kullanici-kayit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isim,
          soyisim,
          telefon,
          cinsiyet,
          email,
          sifre,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Kullanıcı kaydedilirken bir hata oluştu.');
      }
  
      const data = await response.json();
      console.log(data.message);  // Kullanıcıya başarıyla kaydedildiği mesajı console'a yazdır 
      navigate('/girisyap');
    } catch (error) {
      console.error(error.message);
    }
  }; 
      
  return (
    <div className='page-container'>
    <div className='image-container'>
      {/* Burada resminizi ekleyin */}
      <img src="/Assets/arkaplan.jpg" alt="bg" />
    </div>
  <div className='wrapper'>  
   <form onSubmit={handleSubmit}>
        <h1>Kayıt Ol</h1>
        <div className="input-box">
          <input type="text" name='isim' value={isim} onChange={(e) => setIsim(e.target.value)} placeholder='İsim' required />
        </div>
        <div className="input-box">
          <input type="text" name='soyisim' value={soyisim} onChange={(e) => setSoyisim(e.target.value)} placeholder='Soyisim' required />
        </div>
        <div className="input-box">
          <input type="text" name='telefon' value={telefon} onChange={(e) => setTelefon(e.target.value)} placeholder='Telefon Numarası' required />
        </div>
        <div className="input-box">
          <input type="text" name='cinsiyet' value={cinsiyet} onChange={(e) => setCinsiyet(e.target.value)} placeholder='Cinsiyet' required />
        </div>
        <div className="input-box">
          <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail Adresi' required />
        </div>
        <div className="input-box">
          <input type="password" name='sifre' value={sifre} onChange={(e) => setSifre(e.target.value)} placeholder='Şifre' required />
        </div>
        <button type="submit" >Kayıt Ol</button>
      </form>
  <div className='register-link'> 
  <p>Zaten bir hesabın var mı?<a href ="#">Giriş Yap</a> </p> 
  
  </div>

  </div>  
  </div>
  )
}

export default KullanıcıKayıtOl

