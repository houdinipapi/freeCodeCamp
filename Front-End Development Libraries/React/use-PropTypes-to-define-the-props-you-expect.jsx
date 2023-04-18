// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
{/* TESTS */}
// The ShoppingCart component should render.
// The Items component should render.
// The Items component should include a propTypes check to require a value for quantity and ensure that its value is a number.

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// The Items component should include a propTypes check to require a value for quantity and ensure that its value is a number.
Items.propTypes = { quantity: PropTypes.number.isRequired }

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};