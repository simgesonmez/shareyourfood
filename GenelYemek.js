import React, { useEffect, useState } from 'react';
import './GenelYemek.css';

function YemekListesi() {
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

    return (
        <div className='meals-list-container'>
            <h1>Yemek Listesi</h1>
            <div className='meals-container-vertical'>
                {meals.map((meal) => (
                    <div key={meal._id} className='meal-card-vertical'>
                        <h4>{meal.yemekAdi}</h4>
                        <img src={`http://localhost:5000${meal.resimUrl}`} alt={meal.yemekAdi} className='meal-image' />
                        <p>{meal.yemekMalzemeleri}</p>
                        <p>{meal.yemekTarifi}</p>
                        <p>{meal.yemekAdresi}</p>
                        <button className="buy-button">Satın Al</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YemekListesi;
