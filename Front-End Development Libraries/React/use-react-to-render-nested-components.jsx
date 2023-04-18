// The TypesOfFood component should return a single div element.
// The TypesOfFood component should return the Fruits component.
// The Fruits component should return the TypesOfFruit component.
// The TypesOfFruit component should return the h2 and ul elements.

const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
                <ul>
                    <li>Apples</li>
                    <li>Blueberries</li>
                    <li>Strawberries</li>
                    <li>Bananas</li>
                </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* Change the code below this line */ }
            <TypesOfFruit />
            { /* Change the code above this line */ }
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */ }
                <Fruits />
                { /* Change code above this line */ }
            </div>
        );
    }
};