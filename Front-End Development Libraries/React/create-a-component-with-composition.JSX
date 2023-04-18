{/*
Compose the ChildComponent together with the ParentComponent.
The ChildComponent should be within the ParentComponent.
Make sure to close the ChildComponent tag with a forward slash.
The React component should return a single div element.
The component should return two nested elements.
The component should return the ChildComponent as its second child.
 */}

const ChildComponent = () => {
    return (
        <div>
            <p>I am the Child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructo(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>I am the parent</h1>
            {/* Change code below this line */}
            <ChildComponent />
            {/*Change code above this line */}
        </div>
        );
    }
};