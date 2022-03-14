// part 1.3
const App = () => {
    return (
        <div>
            {/* part 1.1 */}
            <FirstComponent/>
            {/* part 1.2 */}
            <NamedComponent name="John"/>
        </div>
    )
}

// Render to the React DOM
ReactDOM.render(<App/>, document.querySelector("#root"));