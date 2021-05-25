import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor(state){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        // eslint-disable-next-line
        this.state.searchField = event.target.value;
    }

    onSearch = () => {
        this.setState({ searchField: this.state.searchField });
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

        
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !robots.length ?
        <h1 className="ma2">Loading . . .</h1> :
        (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChanged={this.onSearchChange} searchPressed={this.onSearch} />
                    <br />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
        )
    }
};

export default App;