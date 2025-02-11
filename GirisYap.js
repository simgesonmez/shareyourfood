import React, {useState} from 'react'
import './GirisYap.css' 
import { useNavigate} from 'react-router-dom' ; 
function GirisYap() { 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/giris', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, sifre })
      });
  
      if (response.ok) {
        console.log('Başarılı giriş:', response);
        navigate('/profil'); // Başarılı giriş olduğunda profil sayfasına yönlendirin
      } else {
        const data = await response.json();
        console.error('Giriş hatası:', data.message);
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      setErrorMessage('Giriş yapılırken bir hata oluştu.');
    }
  };
  return (
    <div className='page-container'>
    <div className='image-container'>
      {/* Burada resminizi ekleyin */}
      <img src="/Assets/arkaplan.jpg" alt="bg" />
    </div>
  <div className='wrapper'>  
  <form onSubmit ={handleLogin}>  
   <h1>Giriş Yap</h1>  
   {errorMessage && <div className="error-message">{errorMessage}</div>}
   <div className = "input-box">
   <input type = "text " value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail Adresi ' required/> 
   
   </div>  
   <div className = "input-box">
   <input type = "password" value={sifre} onChange={(e) => setSifre(e.target.value)} placeholder='Şifre' required/>   
  </div>  
  
  <div className='remember-forget'> 
  <label><input type ="checkbox"/>Beni Hatırla</label> 
  <a href="https://example.com">Şifremi Unuttum</a>
  </div>  
  <button type="submit">Giriş Yap</button> 
  <div className='register-link'> 
  <p>Bir hesabınız yok mu?<a href ="#">Kayıt Ol</a> </p> 
  </div>
  </form>
  </div>  
  </div>
  )
}
export default GirisYap
