import React, { useState } from 'react';
import AddCar from './Components/AddCar';
import DisplayCar from './Components/DisplayCar';
import './App.css'
export default function App() {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    const handleEdit = (index) => {
        const selectedCarDetails = cars[index];
        setSelectedCar(selectedCarDetails);
    };

    const handleDelete = (index) => {
        const updatedCars = [...cars];
        updatedCars.splice(index, 1);
        setCars(updatedCars);
    };

    const handleAddCar = (newCar) => {
        setCars([...cars, newCar]);
    };

    const handleCarUpdate = (updatedCarDetails) => {
        if (selectedCar) {
            const updatedCars = cars.map((car, index) =>
                index === cars.indexOf(selectedCar) ? updatedCarDetails : car
            );
            setCars(updatedCars);
            setSelectedCar(null);
        }
    };

    return (
        <div className='app'>
            <div className='title-name'>Store</div>

            <AddCar onAddCar={handleAddCar} onUpdateCar={handleCarUpdate} selectedCar={selectedCar} />

            <DisplayCar cars={cars} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}
