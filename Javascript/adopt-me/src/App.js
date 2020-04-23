// const Pet = props => { // traditional way, but attribute X must be props.X
const Pet = ({ name, animal, breed }) => { // destructured version of props
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name), // props.name if we passed in props
        React.createElement("h2", {}, animal), // props.animal if we passed in props
        React.createElement("h2", {}, breed) // props.breed if we passed in props
    ]);
};


const App = () => {
    return React.createElement(
        "div", // DOM element
        {}, // attributes in said DOM element, like id and class
        [
            React.createElement("h1", {}, "Adopt Me!"), // children of DOM element
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havenese" }),
            React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockateil" }),
            React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));