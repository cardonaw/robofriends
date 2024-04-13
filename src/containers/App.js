import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((jsonUsers) => { this.setState({ robots: jsonUsers }) });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })


        // AND THIS IS MORE CLEANER....

        return !this.state.robots.length ?

            <h1 className="tc">Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>

                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );


        //ANOTHER WAY TO DO IT

        // if (this.state.robots.length === 0) {

        //     return <h1 className="tc">Loading...</h1>

        // } else {

        //     return (
        //         <div className="tc">
        //             <h1 className="f2">RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
        //             <Scroll>
        //                 <CardList robots={filteredRobots} />
        //             </Scroll>
        //         </div>
        //     );
        // }

    }
}

export default App;