import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// version 1
// const p1 = React.createElement("p",{id : "firstPara"} , "This is paragraph 1");
// const p2 = React.createElement("p",null, "This is paragraph 2");

// const myList = React.createElement("ul", null, [
//   React.createElement("li",null, "item 1"),
//   React.createElement("li",null, "item 2"),
//   React.createElement("li",null, "item 3")
// ]);

// const mainDiv = React.createElement("div", {name : "myDiv", id : "firstDiv"}, [p1, p2, myList]);

// version 2
// const p1 = <p id="firstPara">This is para 1</p>;

// const p2 = <p> This is para 2</p>;
// const myList = <ul>
//   <li> Item 1</li>
//   <li> Item 2</li>
//   <li> Item 3</li>
// </ul>;

// const mainDiv = <div>
//   {p1}{p2}{myList}

// </div>

//VERSION 3
// const mainDiv = <div>
//   <p>This is para 1</p>
//   <p>This is para 2</p>
//   <ul>
//     <li>First Item</li>
//     <li>Item 2</li>
//     <il>Item 3</il>
//   </ul>
//   <label htmlFor='firstName'> First name</label>
//   <input id="firstName" type="text" required="true"/>
//   <p></p>
// </div>
// root.render(mainDiv);

/*root.render(p1);*/

root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
