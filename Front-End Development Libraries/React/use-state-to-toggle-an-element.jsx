{/* TESTS */}
// MyComponent should return a div element which contains a button.
// The state of MyComponent should initialize with a visibility property set to false.
// Clicking the button element should toggle the visibility property in state between true and false.
// An anonymous function should be passed to setState.
// this should not be used inside setState

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // Remember to bind this to the method constructor.
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    // Clicking the button element should toggle the visibility property in state between true and false.
    toggleVisibility() {
        this.setState(state => {
            if (state.visibility === true) {
                return { visibility: false };
            } else {
                return { visibility: true };
            }
        });
    }

    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}