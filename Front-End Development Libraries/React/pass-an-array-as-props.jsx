{/* TESTS */}
// The ToDo component should return a single outer div.
// The third child of the ToDo component should be an instance of the List component.
// The fifth child of the ToDo component should be an instance of the List component.
// Both instances of the List component should have a property called tasks and tasks should be of type array.
// The first List component representing the tasks for today should have 2 or more items.
// The second List component representing the tasks for tomorrow should have 3 or more items.
// The List component should render the value from the tasks prop in the p tag.

const List = (props) => {
    {/* The List component should render the value from the tasks prop in the p tag. */}
    return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                {/* Both instances of the List component should have a property called tasks and tasks should be of type array. */}
                <h2>Today</h2>
                {/* The first List component representing the tasks for today should have 2 or more items. */}
                <List tasks={["walk dog", "workout"]} />
                <h2>Tomorrow</h2>
                {/* The second List component representing the tasks for tomorrow should have 3 or more items. */}
                <List tasks={["walk dog", "workout", "play golf"]} />
            </div>
        );
    }
};