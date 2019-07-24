import React from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Jumbotran from './components/Jumbotron'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The image was clicked.');
    }
    return ( < >
        <
        NavBar / >
        <
        Jumbotran / >
        <
        Content / >
        <
        Footer / >
        <
        />)
    }

    export default App