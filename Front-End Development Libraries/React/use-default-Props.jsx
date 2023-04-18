{/* TESTS */}
// The ShoppingCart component should render
// The ShoppingCart component should have a default prop of { items: 0 }

const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};

// The ShoppingCart component should have a default prop of { items: 0 }
ShoppingCart.defaultProps = { items: 0 }