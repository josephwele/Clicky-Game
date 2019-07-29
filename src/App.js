import React from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Jumbotran from './components/Jumbotron'
import Footer from './components/Footer'
import Content from './components/Content'

class App extends React.Component {
        state = {
            score: 0,
            topScore: 0
        }
        handleChange = (e) => {
            const Score = e
            this.setState({ score: Score })
            console.log(`from app ${this.state.score}`)
            if (Score > this.state.topScore) {
                this.setState({ topScore: Score })
            }
        }
        render() {

            return ( < >
                <
                NavBar scoreParent = { this.state.score }
                topScoreParent = { this.state.topScore }
                / > <
                Jumbotran / >
                <
                Content handleChange = { this.handleChange }
                / > <
                Footer / >
                <
                />)
            }
        }

        export default App