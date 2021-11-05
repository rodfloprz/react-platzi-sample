import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


/* const e = React.createElement;

function App(){
  <h1 id="title">Hola React</h1>
  return(
    React.createElement('h1',{id: 'title'},'Oli React')
    );
}
ReactDOM.render(e());
*/

ReactDOM.render(
  //<App/>
  <App>
    <h1>Buenaaaaaas!!</h1>
  </App>,
  document.getElementById('root')
);
