import React from 'react';
import { render } from 'react-dom';

/*
// MyModule
export const x = 5
export const y = 10
// different file
import { x } fron './MyModule'
// tree shaking
*/

const MyTitle = function(props) {
  // return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
  const style = {color: props.color}
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  )
};
const MyFirstComponent = function() {
  //return React.createElement('div', null, React.createElement('h1', null, 'This is my first component!'))
  return <div id="my-first-component">
            <MyTitle title="Game of Thrones" color="YellowGreen" />
            <MyTitle title="Stranger Things" color="GreenYellow" />
            <MyTitle title="House of Cards" color="Peru" />
            <MyTitle title="The Americans" color="burlywood" />
          </div>
};
/*
var a = 4;
a = a + x;
*/
render(<MyFirstComponent/>, document.getElementById('app'));
/*
//yarn global add prettier
//prettier --single-quote --print-width=120 ClientApp.jsx
//prettier --single-quote --print-width=120 --write ClientApp.jsx 
*/
// "format":"prettier --write --single-quote --print-width=120 --parser=flow --tab-width=2 \"js/**/*.{js,jsx}\""
/*
//yarn add eslint
// yarn add eslint-plugin-prettier
// yarn add eslint-config-prettier
// yarn add eslint-config-prettier
// yarn add eslint-config-airbnb
// yarn add eslint-plugin-jsx-a11y
// yarn add eslint-plugin-react
// yarn add eslint-plugin-import
// vscode'u application folderına koyup orada açmak lazım
*/
// eslint **/*.{js,jsx} --quiet

// ./node_modules/.bin/webpack js/ClientApp.js public/bundle.js
// yarn add babel-preset-es2015
// ./node_modules/.bin/webpack
// yarn build
// yarn build -- -p   => sourcemapleri çıkarır
// yarn build -- --watch  => her saveden sonra tekrar paketler
