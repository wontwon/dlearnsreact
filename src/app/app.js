import React from "react";
import Router from "react-router";


//Add Jquery to window context
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

//Import custom styling
import "!style!css!less!../less/main.less";
import "!style!css!less!../../node_modules/react-select/less/default.less";

import Header from "./header";
 
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        let { location, history } = this.props;
        let pathName = location.pathname;

        let header = (pathName.indexOf("/workshop") > -1) || pathName === "/host" ? "" : <Header history={history} location={location} />

        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}