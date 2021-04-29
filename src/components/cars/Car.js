import './car.style.css'

export default function Car(props) {
    let {producer, model, year} = props
    return(
    <div>
        <h4>{producer} {model}</h4>
        <p>{year}</p>
        <button>Канапка</button>

    </div>
    )
}