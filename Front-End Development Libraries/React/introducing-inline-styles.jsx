// Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px.
// Note that you can optionally set the font size to be a number, omitting the units px, or write it as 72px.
{/* TESTS */}
// The component should render a div element.
// The div element should have a color of red.
// The div element should have a font size of 72px.

class Colorful extends React.Component {
    render() {
        return (
            <div style={{color: "red", fontSize: 72}}>Big Red</div>
        );
    }
};