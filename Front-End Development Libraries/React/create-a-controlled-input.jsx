{/* TESTS */}
// ControlledInput should return a div element which contains an input and a p tag.
// The state of ControlledInput should initialize with an input property set to an empty string.
// Typing in the input element should update the state and the value of the input, and the p element should render this state as you type.

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({input: event.target.value });
    }

    render() {
        return (
            <div>
                <input value={ this.state.input} onChange={this.handleChange} />
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};