{/* TESTS */}
// The component ShoppingCart should render
// The component Items should render.
// The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // The Items component should have a prop of { quantity: 10 } passed from the ShoppingCart component.
        return <Items quantity={10} />
    }
};