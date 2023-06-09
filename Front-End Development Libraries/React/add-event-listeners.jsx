// Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress().
// You can use document.addEventListener() which takes the event (in quotes) as the first argument and the callback as the second argument.
// Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener().
// It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.

{/* TESTS */}
// MyComponent should render a div element which wraps an h1 tag.
// A keydown listener should be attached to the document in componentDidMount.
// The keydown listener should be removed from the document in componentWillUnmount.
// Once the component has mounted, pressing enter should update its state and the rendered h1 tag.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};