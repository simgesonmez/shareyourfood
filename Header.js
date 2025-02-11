import React from 'react'
import './Header.css' 
import {useNavigate} from 'react-router-dom' 
function Header() {  
    const navigate = useNavigate();
    const Navbar = () => {
        const handleGirisYapClick = () => {
            navigate("/girisyap"); 
        };

        const handleKayitOlClick = () => {
            navigate("/kaydol");
        };
        return (
          <nav className="navbar"> 
           <div className="logo">
                <img src="/Assets/logo2.png" alt='Logo'/>  
                <a className='nav_header'>YEMEĞİNİ PAYLAŞ</a>
            </div> 
            <ul className='nav_list'> 
             <li className='item'>
                <button class="giris-button" onClick={handleGirisYapClick}>Giriş Yap</button> 
             </li> 
            
           </ul>
          </nav>
        );
    }  
    return (
        <div>
            <Navbar />
        </div>
    );
}

export default Header