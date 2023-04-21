// The shouldComponentUpdate() method is added in a component called OnlyEvens.
// Currently, this method returns true so OnlyEvens re-renders every time it receives new props.
// Modify the method so OnlyEvens updates only if the value of its new props is even.
// Click the Add button and watch the order of events in your browser's console as the lifecycle hooks are triggered.
{/* TESTS */}
// The Controller component should render the OnlyEvens component as a child.
// The shouldComponentUpdate method should be defined on the OnlyEvens component.
// The OnlyEvens component should return an h1 tag which renders the value of this.props.value.
// OnlyEvens should re-render only when nextProps.value is even.

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        if (nextProps.value % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return (
            <h1>{this.props.value}</h1>
        );
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}