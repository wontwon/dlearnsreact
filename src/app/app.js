import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app-container")
);