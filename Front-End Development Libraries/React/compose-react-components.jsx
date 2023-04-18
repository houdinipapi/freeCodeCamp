{/* Tests */}
// The TypesOfFood component should return a single div element.
// The TypesOfFood component should return the Fruits component.
// The Fruits component should return the NonCitrus component and the Citrus component.
// The TypesOfFood component should return the Vegetables component below the Fruits component.

class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                {/* Change code below this line */}
                <NonCitrus />
                <Citrus />
                {/* Change code above this line */}
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                { /* Change code above this line */}
                <Vegetables />
            </div>
        );
    }
};