/* let obj = {
    name: "Rahul",
    age: 20,
    address: "Narkandi",
    company: "Google",
};

let fn = ({name, company}) => {
    console.log(name, company);
};

fn(obj); */

/* let a = 990;

let print = () => {
    console.log(a);
};

let ab = () => {
    let a = 80;

    print();
};

ab(); */

/* console.log(window);
console.log(React); */

/* let h1 = document.createElement("h1");
h1.textContent = "hello";
document.body.append(h1); */

let rh1 = React.createElement(
  "h1",
  { className: "box" },
  "hello i am from react",
);

let realDomElem = document.querySelector("#root");
/* let rootOfReact = ReactDOM.createRoot(realDomElem);
rootOfReact.render(rh1); */

console.log(ReactDOM);

/* console.log(h1); */
console.log(rh1);

/* import React from "react";
import { a, mul } from "./main.js"; */

/* console.log(a);
let res = mul(4, 5);
console.log(res); */

let div = React.createElement(
  "div",
  {}, [
     React.createElement("h1", {}, React.createElement("span", {}, " i am span")),
     React.createElement("h2", {}, React.createElement("span", {}, " i am span in h2")
  
    )],
);

ReactDOM.createRoot(realDomElem).render(div);
