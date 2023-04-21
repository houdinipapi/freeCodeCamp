{/* TESTS */}
// MyComponent should exist and render to the page.
// MyComponent's state should be initialized to an array of six users.
// MyComponent should return a div, an h1, and then an unordered list containing li elements for every user whose online status is set to true.
// MyComponent should render li elements that contain the username of each online user.
// Each list item element should have a unique key attribute.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
    render() {
     const onlineUsers = this.state.users.filter(user => user.online);
      const renderOnline = onlineUsers.map(user => (
        <li key={user.username}>{user.username}</li>
      )); 
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
  }