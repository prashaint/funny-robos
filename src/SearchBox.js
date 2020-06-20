import React from 'react';

const SearchBox = ({searchField, searchChange}) => {

	return (
		<div className='pa2'>
		<h1>Search your favourites robos here!</h1>
		<input className='pa3 bs4 br4 b--purple bg-light-blue'
			   name='SearchBox' 
			   type='search' 
			   placeholder='Search robo by name' 
			   onChange={searchChange}/>
		</div>

	);

}

export default SearchBox;