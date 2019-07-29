import React from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Jumbotran from './components/Jumbotron'
import Footer from './components/Footer'
import Content from './components/Content'
import { ReactDOM } from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }
    render() {
        return ( < div >
            <
            NavBar / >
            <
            Jumbotran / >
            <
            Content / >
            <
            Footer / >
            <
            div / > )
    }
}

export default App