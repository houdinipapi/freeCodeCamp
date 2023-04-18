{/* TESTS */}
// The CampSite component should render.
// The Camper component should render.
// The Camper component should include default props which assign the string CamperBot to the key name.
// The Camper component should include prop types which require the name prop to be of type string.
// The Camper component should contain a p element with only the text from the name prop.

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};

// Stateless Functional Component
const Camper = props => <p>{props.name}</p>;

// The Camper component should include default props which assign the string CamperBot to the key name.
Camper.defaultProps = { name: 'CamperBot' };

// The Camper component should include prop types which require the name prop to be of type string.
Camper.propTypes = { name: PropTypes.string.isRequired };