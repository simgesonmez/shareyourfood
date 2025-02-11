import React, { useState } from 'react';
import './YemekYukle.css'; 


function YemekYukle() {
    const [yemekAdi, setYemekAdi] = useState('');
    const [yemekMalzemeleri, setyemekMalzemeleri] = useState('');
    const [yemekTarifi, setyemekTarifi] = useState(''); 
    const [yemekAdresi, setyemekAdresi] = useState('');
    const [resim, setResim] = useState(null);
    const [resimUrl, setResimUrl] = useState(null);

    const handleResimYukle = (e) => {
        const file = e.target.files[0];
        setResim(file);
        setResimUrl(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('yemekAdi', yemekAdi);
        formData.append('yemekMalzemeleri', yemekMalzemeleri);
        formData.append('yemekTarifi', yemekTarifi); 
        formData.append('yemekAdresi', yemekAdresi); 
        formData.append('resim', resim);

        try {
            const response = await fetch('http://localhost:5000/api/yemek-yukle', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Yemek başarıyla yüklendi!');
                // Profil sayfasına yönlendirme veya başka bir işlem
            } else {
                alert('Yemek yükleme işlemi başarısız oldu.');
            }
        } catch (error) {
            console.error('Yemek yükleme hatası:', error);
            alert('Yemek yükleme işlemi sırasında bir hata oluştu.');
        }
    };
  return (
    <div className="yemek-yukle-container">
      <h1>Yemek Yükle</h1>
      <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label htmlFor="yemekAdi">Yemek Adı</label>
                    <input type="text" id="yemekAdi" value={yemekAdi} onChange={(e) => setYemekAdi(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="malzemeler">Malzemeler</label>
                    <textarea id="malzemeler" value={yemekMalzemeleri} onChange={(e) => setyemekMalzemeleri(e.target.value)} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tarif">Tarif</label>
                    <textarea id="tarif" value={yemekTarifi} onChange={(e) => setyemekTarifi(e.target.value)} required></textarea>
                </div> 
                <div className="form-group">
                    <label htmlFor="adres">Adres</label>
                    <textarea id="adres" value={yemekAdresi} onChange={(e) => setyemekAdresi(e.target.value)} required></textarea>
                </div> 

                <div className="form-group">
                    <label htmlFor="resim">Resim Yükle</label>
                    <input type="file" id="resim" onChange={handleResimYukle} required />
                </div>
                {resimUrl && <img src={resimUrl} alt="Yemek Resmi" className="preview-image" />}
                <button type="submit">Yemek Yükle</button>
            </form>
    </div>
  );
}

export default YemekYukle;


