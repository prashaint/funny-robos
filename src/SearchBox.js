import React from 'react';

const SearchBox = ({searchField, searchChange}) => {

	return (
		<div className='bg-light-green dark-gray tc dib pa2 br4 ma2 grow bw4 shadow-5 cardGradient'>
		<h2>Search your favourites robo family member here!</h2>
		<h2><input className='pa2 bs4 br4 b--purple bg-light-blue dark-blue'
			   name='SearchBox' 
			   type='search' 
			   placeholder='Enter robo name to search' 
			   onChange={searchChange}/></h2>
		</div>

	);

}

export default SearchBox;