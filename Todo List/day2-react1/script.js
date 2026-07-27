import React from "react";

let root = document.querySelector("#root");

const h1 = React.createElement("h1", {}, "Hello i am from react");
ReactDOM.createRoot(root).render(h1);