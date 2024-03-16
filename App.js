import React from "react";
import ReactDOM from "react-dom/client";

let Parent = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: 'child' }, 
React.createElement("h1", {}, "I am h1 from netsed child")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent)



