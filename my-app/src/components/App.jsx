import React from "react";
import Login from "./Login";
import Register from "./Register";
import Login1 from "./Login1";

//var isLoggedIn = true;

var userIsRegistered = false;

// const element = document.getElementById("my-Btn");
// element.addEventListener("click", function () {
//   document.getElementById("demo");
// });

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

/**
 *  "&&" in React
 * CONDITION && EXPRESSION
 * true  && EXPRESSION
 * false  &&  EXPRESSSION NOT EXECUTED IT DONT CHECK RIGHT SIDE OF THE EXPRESSION.
 *
 */

// Using "Ternary Operator"  we can use statements as expression.
// Syntax : CONDITION ? DO ID TRUE : DO IF FALSE.

function App() {
  return (
    //   <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>

    // By using and && operator
    //   <div className="container">{isLoggedIn && <h1>Hello</h1>}</div>

    // =>>>>>> Condition : ONE.
    // <div className="container">
    //   {userIsRegistered} <h1>Registered Successfully!</h1> <Login1 />
    // </div>

    //  =>>>>>> Condition : TWO.
    // <div className="container">
    //   {userIsRegistered ? <h1>Registered Successfully!</h1> : <Register />}
    // </div>

    // =>>>>>> Condition : THREE.
    <div className="container">
      {userIsRegistered} <h1 id="demo">Registered Successfully⬇</h1> <Login1 />
    </div>
  );
}

export default App;
