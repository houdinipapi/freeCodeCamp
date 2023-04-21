{/* TESTS */}
// The GateKeeper component should render a div element.
// The GateKeeper component should be initialized with a state key input set to an empty string.
// The GateKeeper component should render an h3 tag and an input tag.
// The input tag should initially have a style of 1px solid black for the border property.
// The input tag should be styled with a border of 3px solid red if the input value in state is longer than 15 characters.

class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      if (this.state.input.length > 15) {
        inputStyle.border = '3px solid red'
      }
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };