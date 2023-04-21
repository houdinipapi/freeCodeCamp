{/* TESTS */}
// The Frameworks component should exist and render to the page.
// Frameworks should render an h1 element.
// Frameworks should render a ul element.
// The ul tag should render 6 child li elements.
// Each list item element should have a unique key attribute.
// Each list item element should contain text from frontEndFrameworks.

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((framework, index) => (
      <li key={index}>{framework}</li>
    ));
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };