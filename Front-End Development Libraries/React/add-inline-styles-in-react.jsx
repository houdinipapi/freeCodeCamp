// If you have a large set of styles, you can assign a style object to a constant to keep your code organized.
// Declare your styles constant as a global variable at the top of the file.
// Initialize styles constant and assign an object with three style properties and their values to it.
// Give the div a color of purple, a font-size of 40, and a border of 2px solid purple.
// Then set the style attribute equal to the styles constant.
{/* TESTS */}
// The styles variable should be an object with three properties.
// The styles variable should have a color property set to a value of purple.
// The styles variable should have a fontSize property set to a value of 40.
// The styles variable should have a border property set to a value of 2px solid purple.
// The component should render a div element.
// The div element should have its styles defined by the styles object.

const styles = {
    color: 'purple',
    fontSize: 40,
    border: '2px solid purple'
};

class Colorful extends React.Component {
    render() {
        return (
            <div style={styles}>Style Me!</div>
        );
    }
};