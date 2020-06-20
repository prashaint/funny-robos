import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';
import TextBox from './TextBox';

class App extends Component {

constructor(){
	super()
	this.state = {
		robots: [],
		searchField: ''
	}
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));
}

onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
}

onFormSubmit = (event) => {
	this.setState({robots: ['11','ram','abc@mycomp.com']})
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
				<h1>Super Funny Robos</h1>
				<h1>Welcome to the world of funny and stylish robos!</h1>
				<TextBox handleSubmit={this.onFormSubmit} />
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
	  			<CardList robots={filterRobot}/>
	  			</Scroll>
	  		</div>

		);
	}
}

}


export default App;
