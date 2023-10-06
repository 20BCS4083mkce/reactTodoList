
import React, { useState, useEffect } from 'react';
import './AddCar.scss';
export default function AddCar({ onAddCar, onUpdateCar, selectedCar }) {
    const [newCar, setNewCar] = useState({
        producer: '',
        model: '',
        color: '',
        price: ''
    });

    useEffect(() => {
        if (selectedCar) {
            setNewCar(selectedCar);
        } else {
            setNewCar({
                producer: '',
                model: '',
                color: '',
                price: ''
            });
        }
    }, [selectedCar]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewCar({ ...newCar, [name]: value });
    }

    function handleAddCar(event) {
        event.preventDefault();

        const { producer, model, color, price } = newCar;

        if (producer && model && color && price) {
            if (selectedCar) {
                onUpdateCar(newCar);
            } else {
                onAddCar(newCar);
            }

            setNewCar({
                producer: '',
                model: '',
                color: '',
                price: ''
            });
        } else {
            alert('Please fill out all fields.');
        }
    }

    return (
        <form onSubmit={handleAddCar}>
            <div>
            <label>Producer</label>
            <input type='text' name='producer' value={newCar.producer} onChange={handleInputChange} required />
            <label>Model</label>
            <input type='text' name='model' value={newCar.model} onChange={handleInputChange} required />
            <label>Color</label>
            <input type='text' name='color' value={newCar.color} onChange={handleInputChange} required />
            <label>Price</label>
            <input type='text' name='price' value={newCar.price} onChange={handleInputChange} required />
            </div>
            <input type='submit' value='Add Car' id='form-button' />
        </form>
    );
}
