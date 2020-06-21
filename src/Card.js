import React from 'react';

const Card = ({id, name, email}) => {
	return (
			
			<div className='bg-light-green dark-gray tc dib pa2 br4 ma2 grow bw4 shadow-5 cardGradient'>
				<img alt='My Robo!' src={`https://robohash.org/${name}?200x200`} />
				<div text-align='center'>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>

		);
}

export default Card;
