import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';
/*import TextBox from './TextBox';*/
import {robot} from './robot';

class App extends Component {

constructor(){
	super()
	this.state = {
		robots: robot,
		searchField: ''
	}
}

/*componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));
}*/

onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
}


render() {

	const { robots, searchField } = this.state;
			const filterRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
	})

	if(robots.length === 0) {
		return <h1>Robots are loading...</h1>
	}
	else{
		return (
			<div className='washed-red tc'>
				<h1>Super Funny Robo Family</h1>
				<h1>Welcome to the world of funny and stylish robos!</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				{/*<TextBox handleSubmit={this.handleSubmit}/>*/}
				<Scroll>
	  			<CardList robots={filterRobot}/>
	  			{/*<CardList robots={robots}/>*/}
	  			</Scroll>
	  		</div>

		);
	}
}

}


export default App;
