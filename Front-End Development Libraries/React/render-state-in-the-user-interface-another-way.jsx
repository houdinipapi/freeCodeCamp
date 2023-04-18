{/* TESTS */}
// MyComponent should have a key name with value freeCodeCamp stored in its state.
// MyComponent should render an h1 heading element enclosed in a single div.
// The rendered h1 tag should include a reference to {name}.
// The rendered h1 heading element should contain text rendered from the component's state.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        // define a const called name and set it equal to the name value in the component's state.
        const name = this.state.name;
        return (
            // The rendered h1 tag should include a reference to {name}.
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
};