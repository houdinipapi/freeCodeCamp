// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.
// Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.

{/* TESTS */}
// MyComponent should render a div element.
// console.log should be called in componentWillMount.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log();
    }
    render() {
        return <div />
    }
};