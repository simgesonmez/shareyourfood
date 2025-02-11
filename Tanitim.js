import React from 'react'
import './Tanitim.css' 
import { useNavigate } from 'react-router-dom';
const Tanitim = () => {
  const navigate = useNavigate();
  const handleKayitOlClick=() => { 
    navigate('/kaydol');
  }; 
  const handleKullanıcıKayıtOlClick = () => {
    navigate("/kullanici-kaydol");
};
    return (
 <div className='container'> 
<p className='word'>YEMEK ISRAFINININ</p>
<p className='words'>ÖNÜNE GEÇELİM</p>
<p className='page_info'>
  Gıda israfı hem ülkemiz hem de dünyamız adına çözüm bulunması gereken büyük bir sorundur.</p>
<p className='info'>
  Bize katılarak bu israfın önüne geçilmesine yardımcı olabilirsiniz.</p>
<div className='image'>
      {/* Burada resminizi ekleyin */}
      <img src="/Assets/siteresmi.jpeg" alt="background" />
    </div> 
    <div className="signup-section">
        <h2>Hemen bize katılın</h2>
        <div className="signup_image"> 
             <img src="/Assets/site.png" alt="background" />
             <p className='inf'>Yiyeceklerinizi paylaşarak israfın önüne geçin.</p> 
             <button className='btn'onClick={handleKayitOlClick}>Gönüllü olarak kayıt olun</button>
         </div>
         <div className="signup_imagee"> 
             <img src="/Assets/resim2.png" alt="background" />
             <p className='inff'>Hızlıca yemeğe ulaşın.</p>
             <button className='btn'onClick={handleKullanıcıKayıtOlClick}>Kullanıcı olarak kayıt olun</button>
         </div>
     </div>
    <p className='info_container'>BUNLARI BİLİYOR MUYDUNUZ?</p> 
    <div className='bg'>
      {/* Burada resminizi ekleyin */}
      <img src="/Assets/site.jpeg" alt="background" />
    </div> 
    <div className='info-cont'> 
    <p>Türkiyede günde 4,9 milyon ekmek çöpe atılıyor.</p>
    <p>Ülkemizde her yıl kişi başına 93 kilogram gıda çöpe gitmektedir.</p>
    <p>1 yılda çöpe giden ekmek 500 okul değerinde.</p> 
    <p>Evler ve restorantlardaki tüketime hazır gıdanın yüzde 17'si doğrudan çöpe gitmektedir.</p>
    </div> 
  
  </div>
  
  );
}
export default Tanitim
