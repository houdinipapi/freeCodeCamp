{/* TESTS */}
// MyComponent should return a div element which wraps two elements, a button and an h1 element, in that order.
// The state of MyComponent should initialize with the key value pair { text: "Hello" }.
// Clicking the button element should run the handleClick method and set the state text to You clicked!.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        // binding this to the handleClick() method in the component's constructor.
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            text: "You Clicked!"
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};