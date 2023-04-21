{/* TESTS */}
// The MagicEightBall component should exist and should render to the page.
// MagicEightBall's first child should be an input element.
// MagicEightBall's third child should be a button element.
// MagicEightBall's state should be initialized with a property of userInput and a property of randomIndex both set to a value of an empty string.
// When MagicEightBall is first mounted to the DOM, it should return an empty p element.
// When text is entered into the input element and the button is clicked, the MagicEightBall component should return a p element that contains a random element from the possibleAnswers array.

const inputStyle = {
    width: 235,
    margin: 5
};

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answer= possibleAnswers[this.state.randomIndex];
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                 />
                 <br />
                 <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
                 <br />
                 <h3>Ansewr:</h3>
                 <p>{answer}</p>
            </div>
        );
    }
}