{/* Both the Fruits and Vegetables components are defined for you behind the scenes. */}
{/* Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use. */}

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // The TypesOfFood component should return a single div element.
            <div>
                <h1>Types of Food:</h1>
                {/* The TypesOfFood component should render the Fruits component after the h1 element. */}
                <Fruits />
                {/* The TypesOfFood component should render the Vegetables component after the Fruits. */}
                <Vegetables />
            </div>
        );
    }
};
// The TypesOfFood component should render to the DOM within the div with the id challenge-node.
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));