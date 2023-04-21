{/* TESTS */}
// MyComponent should exist and render.
// When display is set to true, a div, button, and h1 should render.
// When display is set to false, only a div and button should render.
// The render method should use the && logical operator to check the condition of this.state.display.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }
};