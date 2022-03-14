const App = () => {
    return (
        <div>
            <Tweet username="user1" name="john" date={new Date().toLocaleDateString()} message="Test message"/>
            <Tweet username="user2" name="Bill" date={new Date().toLocaleDateString()} message="Test message 2"/>
            <Tweet username="user3" name="Bob" date={new Date().toLocaleDateString()} message="Test message 3"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"));