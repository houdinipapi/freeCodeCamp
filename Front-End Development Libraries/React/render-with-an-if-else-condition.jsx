// MyComponent contains a boolean in its state which tracks whether you want to display some element in the UI or not.
// The button toggles the state of this value.
// Currently, it renders the same UI every time.
// Rewrite the render() method with an if/else statement so that if display is true, you return the current markup.
// Otherwise, return the markup without the h1 element.
// Note: You must write an if/else to pass the tests. Use of the ternary operator will not pass here.
{/* TESTS */}
// MyComponent should exist and render.
// When display is set to true, a div, button, and h1 should render.
// When display is set to false, only a div and button should render.
// The render method should use an if/else statement to check the condition of this.state.display.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }
    render() {
        if(this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1><Displayed></Displayed></h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle <Display></Display></button>
                </div>
            );
        }
    }
};