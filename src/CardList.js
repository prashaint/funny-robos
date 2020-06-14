import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

	return (
			<div className="flex flex-wrap justify-center bw3 pb3 pt3 ma2 dib">
					{
						robots.map((user, idx) => {
						return (
							<Card 
							 key={idx}
							 id={robots[idx].id} 
							 name={robots[idx].name} 
							 email={robots[idx].email} />
						 );
					   })
					}
			</div>
		  );

}

export default CardList;



