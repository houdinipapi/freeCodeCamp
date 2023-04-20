// There is a mock API call in componentDidMount().
// It sets state after 2.5 seconds to simulate calling a server to retrieve data.
// This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1 after the text Active Users:.
{/* TESTS */}
// MyComponent should render a div element which wraps an h1 tag.
// Component state should be updated with a timeout function in componentDidMount.
// The h1 tag should render the activeUsers value from MyComponent's state.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            // The h1 tag should render the activeUsers value from MyComponent's state.
            <div>
                <h1>Active Users: {this.state.activeUsers} </h1>
            </div>
        );
    }
};