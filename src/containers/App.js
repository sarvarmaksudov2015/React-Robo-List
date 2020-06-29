import React, {Component} from 'react'
import CardList from '../components/CardList'
import {robots} from '../robots';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary'


class  App extends Component {
	constructor() {
		super();
		this.state = {
			// STATE is what is being changed in the app
			robots: robots,
			searchfield: ""
		}
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})

	}

	render() {

	const filterRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
				return (
					<div>
						<h1 className="ma2 tc">Robots List</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<ErrorBoundary>
								<CardList robots={filterRobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
				)
			}
			
	}


export default App;