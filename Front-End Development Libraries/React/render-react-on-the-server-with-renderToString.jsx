// The renderToString() method is provided on ReactDOMServer, which is available here as a global object.
// The method takes one argument which is a React element. Use this to render App to a string.
// The App component should render to a string using ReactDOMServer.renderToString.

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  const string = ReactDOMServer.renderToString(<App />);