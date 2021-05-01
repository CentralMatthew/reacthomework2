import './car.style.css'


export default function Car(props) {
    let {producer, model, year, id,func} = props


    return (
        <div>
            <h4>{producer} {model}</h4>
            <p>{year}</p>
            <button onClick={() => func(id)}>Видалити</button>
        </div>
    )
}
