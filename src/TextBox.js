/*import React from 'react';

class TextBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { robots: '' };
  }

  handleSubmit = (event) => {
	console.log(event.target.name, event.target.email);
	event.preventDefault();
	let newRobo = {
		id:101,
		name:event.target.name,
		email:event.target.email
	};
	this.setState({robots: newRobo});
	}

render() {
	return(
		<div className='bg-light-green dark-gray tc dib pa2 br4 ma2 grow bw4 shadow-5 cardGradient'>
		    <form onSubmit={this.handleSubmit}>
		    	<label><h2>Couldn't find your favourite robo, Let's create it now!</h2></label>
	        	<label><h2><input className='pa2 bs4 br4 b--purple bg-light-blue f3 dark-blue' name='name' placeholder='Enter your robo name here' type='text' value={this.event.name} /> </h2></label>
	        	<label><h2><input className='pa2 bs4 br4 b--purple bg-light-blue f3 dark-blue' name='email' placeholder='Enter your robo email here' type='email' value={this.event.email} /> </h2></label>
	        	<h2><input className='pa2 bs4 br4 b--purple bg-light-pink f3 dark-blue' name='submit' type='submit' value="Create Robo Now!" /></h2>
            </form>
		</div>
	);
}

}

export default TextBox;*/