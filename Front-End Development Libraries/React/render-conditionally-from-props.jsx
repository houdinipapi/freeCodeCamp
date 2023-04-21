{/* TESTS */}
// The GameOfChance component should exist and render to the page.
// GameOfChance should return a single button element.
// GameOfChance should return a single instance of the Results component, which has a prop called fiftyFifty.
// GameOfChance state should be initialized with a property of counter set to a value of 1.
// When the GameOfChance component is first rendered to the DOM, a p element should be returned with the inner text of Turn: 1.
// Each time the button is clicked, the counter state should be incremented by a value of 1, and a single p element should be rendered to the DOM that contains the text Turn: N, where N is the value of the counter state.
// When the GameOfChance component is first mounted to the DOM and each time the button is clicked thereafter, a single h1 element should be returned that randomly renders either You Win! or You Lose!. Note: this can fail randomly. If that happens, please try again.

class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1
        }
      });
    }
    render() {
      const expression = Math.random() >= .5 ? true : false;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }