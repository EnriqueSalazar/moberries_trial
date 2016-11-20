import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PizzaContainer from './containers/PizzaContainer'
class App extends Component {
    render() {
        return (
                <MuiThemeProvider>
                    <PizzaContainer/>
                </MuiThemeProvider>
        );
    }
}

export default App;
