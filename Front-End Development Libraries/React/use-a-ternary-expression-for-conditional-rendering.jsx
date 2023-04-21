{/* TESTS */}
// The CheckUserAge component should render with a single input element and a single button element.
// The CheckUserAge component's state should be initialized with a property of userAge and a property of input, both set to a value of an empty string.
// When the CheckUserAge component is first rendered to the DOM, the button's inner text should be Submit.
// When a number of less than 18 is entered into the input element and the button is clicked, the button's inner text should read You Shall Not Pass.
// When a number greater than or equal to 18 is entered into the input element and the button is clicked, the button's inner text should read You May Enter.
// Once a number has been submitted, and the value of the input is once again changed, the button should return to reading Submit.
// Your code should not contain any if/else statements.

const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userAge: '',
        input: ''
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {
            this.state.userAge === ''
            ? buttonOne
            : this.state.userAge >= 18
              ? buttonTwo
              : buttonThree
          }
        </div>
      );
    }
  }