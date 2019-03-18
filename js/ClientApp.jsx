const MyTitle = function(props) {
  return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
  //return React.createElement('div', null, React.createElement('h1', null, 'This is my first component!'))
  return React.createElement('div', null, [
    React.createElement(MyTitle, {
      title: 'Game of Thrones',
      color: 'YellowGreen'
    }),
    React.createElement(MyTitle, {
      title: 'Stranger Things',
      color: 'GreenYellow'
    }),
    React.createElement(MyTitle, {
      title: 'Rick and Morty',
      color: 'LimeGreen'
    }),

    React.createElement(MyTitle, { title: 'Silicon Valley', color: 'peru' })
  ]);
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));

//yarn global add prettier
//prettier --single-quote --print-width=120 ClientApp.jsx
//prettier --single-quote --print-width=120 --write ClientApp.jsx
// "format":"prettier --write --single-quote --print-width=120 --parser=flow --tab-width=2 \"js/**/*.{js,jsx}\""
