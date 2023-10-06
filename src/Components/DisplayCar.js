import './DisplayCar.scss'
export default function DisplayCar({ cars, onEdit, onDelete }) {
    return (
        <div className='display'>
           <div className='display-container'>
               <p>Producer</p>
               <p>Model</p>
               <p>Color</p>
               <p>Price</p>
           </div>
            <div className='display-container-list'>
                {cars.map((car, index) => (
                    <div key={index} className='display-container-list-value'>
                        <p>{car.producer}</p>
                        <p>{car.model}</p>
                        <p>{car.color}</p>
                        <p>{car.price}</p>
                        <button onClick={() => onDelete(index)} id='display-container-list-value-delete'>x</button>
                        <button onClick={() => onEdit(index)} id='display-container-list-value-edit'>Edit</button>
                    </div>
                ))}
            </div>

        </div>
    );
}
