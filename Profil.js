import React, { useEffect, useState } from 'react';
import './Profil.css';
import { useNavigate } from 'react-router-dom';

function Profil() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/yemekler');
                const data = await response.json();
                setMeals(data);
            } catch (error) {
                console.error('Yemekler alınırken hata oluştu:', error);
            }
        };

        fetchMeals();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/yemek-sil/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMeals(meals.filter(meal => meal._id !== id));
            } else {
                alert('Yemek silme işlemi başarısız oldu.');
            }
        } catch (error) {
            console.error('Yemek silme hatası:', error);
            alert('Yemek silme işlemi sırasında bir hata oluştu.');
        }
    };

    return (
        <div className='profile-container'>
            <SecondHeader />
            <div className='profile-card'>
                <div className='card-container'>
                    <img src="/Assets/usericon.jpg" alt="user" className='profile-img' />
                    <h3 className='header'>Simge Sönmez</h3>
                    <button className='profile'>Profilini Düzenle</button>
                </div>
                <div className='meals-add-container'>
                    <div className='meals-container-vertical'>
                        {meals.map((meal) => (
                            <div key={meal._id} className='meal-card-vertical'>
                                <h4>{meal.yemekAdi}</h4>
                                <img src={`http://localhost:5000${meal.resimUrl}`} alt={meal.yemekAdi} className='meal-image' />
                                <p>{meal.yemekMalzemeleri}</p>
                                <p>{meal.yemekTarifi}</p>
                                <p>{meal.yemekAdresi}</p>
                                <button onClick={() => handleDelete(meal._id)}>Sil</button>
                            </div>
                        ))}
                    </div>
                    <AddNewCard />
                </div>
            </div>
        </div>
    );
}

function AddNewCard() {
    const navigate = useNavigate();

    const handleAddNewClick = () => {
        navigate('/yemek-yukle');
    };

    return (
        <div className="add-new-card" onClick={handleAddNewClick}>
            <div className="add-new-content">
                <span className="add-icon">+</span>
                <span className="add-text">Add new</span>
            </div>
        </div>
    );
}

function SecondHeader() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/Assets/logo2.png" alt='Logo' />
                <a className='nav_header'>YEMEĞİNİ PAYLAŞ</a>
            </div>
        </nav>
    )
}

export { Profil, AddNewCard, SecondHeader };






