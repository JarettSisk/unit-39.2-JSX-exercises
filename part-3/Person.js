const Person = (props) => {
    return (
    <div>
        <p>Learn some information about this person</p>
        <ul>
            <li>Name: {props.name.length > 8 ? props.name.substring(0, 6) : props.name}</li>
            <li>Age: {props.age}</li>
        </ul>
        <h3>{props.age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
    </div>
    )
}