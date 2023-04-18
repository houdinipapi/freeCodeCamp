{/* TESTS */}
// StatefulComponent should exist and render.
// StatefulComponent should render a div and an h1 element.
// The state of StatefulComponent should be initialized with a property firstName set to a string.
// The property firstName in the state of StatefulComponent should render in the h1 element.

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // The state of StatefulComponent should be initialized with a property firstName set to a string.
        this.state = {
            firstName: "Houdini"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
};