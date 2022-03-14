const App = () => {
    return (
        <div>
            <Person name="ExampleName" age={18}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"));