//Define a class MyComponent that extends React.Component.
class MyComponent extends React.Component {
    //  Make sure to call the constructor for your component, too.
    constructor(props) {
        super(props);
    }

    //Its render method should return a div that contains an h1 tag with the text: My First React Component! in it.
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
};

// Render this component to the DOM using ReactDOM.render(). There is a div with id='challenge-node' available for you to use.
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));