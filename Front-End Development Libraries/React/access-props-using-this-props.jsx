// Render an instance of the Welcome component in the parent component App.
// Here, give Welcome a prop of name and assign it a value of a string.
// Within the child, Welcome, access the name prop within the strong tags.

{/* TESTS */}
// The App component should return a single div element.
// The child of App should be the Welcome component.
// The Welcome component should have a prop called name.
// The Welcome component should display the string you pass as the name prop within strong tags.

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Welcome name={this.props} />
            </div>
        );
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Hello, <strong>{this.props.name = "Papi"}</strong>!</p>
            </div>
        );
    }
};