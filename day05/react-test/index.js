const page = (
    <div>
        <h1 className="JuaFont"> This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

const navigation = (
    <nav>
        <h1 className="JuaFont">
            BSSM Menu
        </h1>
        <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
        </ul>
    </nav>
)

function TemporaryName() {
    return (
        <div>
            <h1 className="JuaFont">Hi</h1>
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById('root'));