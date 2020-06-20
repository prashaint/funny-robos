import React from 'react';

const TextBox = ({ name, email, handleSubmit }) => {
	return (
		<div className='bg-light-green dark-gray tc dib pa2 br4 ma2 grow bw4 shadow-5 cardGradient'>
		    <form onSubmit={handleSubmit}>
		    	<label><h2> Your own robo needs following details to show-up! </h2></label>
	        	<label><h2>Your Name: <input className='pa2 bs4 br4 b--purple bg-light-blue f3 measure-wide dark-blue' type='text' value={name} /> </h2></label>
	        	<label><h2>Your Email: <input className='pa2 bs4 br4 b--purple bg-light-blue f3 measure-wide' type='email' value={email} /> </h2></label>
	        	<h2><input className='pa2 bs4 br4 b--purple bg-light-pink f3 measure-wide' type='submit' value="Create My Own Robo!" /></h2><br/>
            </form>
		</div>

	);

}

export default TextBox;