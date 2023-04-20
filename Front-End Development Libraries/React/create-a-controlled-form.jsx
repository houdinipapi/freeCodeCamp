{/* TESTS */}
// MyForm should return a div element which contains a form and an h1 tag. The form should include an input and a button.
// The state of MyForm should initialize with input and submit properties, both set to empty strings.
// Typing in the input element should update the input property of the component's state.
// Submitting the form should run handleSubmit which should set the submit property in state equal to the current input.
// handleSubmit should call event.preventDefault
// The h1 heading element should render the value of the submit field from the component's state.

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
    }

    render() {
        return (
            <div>
                <form onsubmit={this.handlesubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
};