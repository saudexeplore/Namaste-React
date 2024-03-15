let Parent = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: 'child' }, 
React.createElement("h1", {}, "I am h1 from netsed child")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent)

let Parent2 = React.createElement("div", { id: "parent" }, 
React.createElement("div", { id: 'child' }, 
React.createElement("h1", {}, "I am h1 from netsed child")));

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(Parent2)