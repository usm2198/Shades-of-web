import React from 'react'
import Card1 from '../component/Card1';

function Card1Container() {
    const cardsData = [
        {
            imagePath: require('../images/dubai-hills-estate.jpg'),
            heading: 'Dubai Hills Estate',
        },
        {
            imagePath: require('../images/dubai-marina.png'),
            heading: 'Dubai Mariana',
        },
        {
            imagePath: require('../images/emirates-living.jpg'),
            heading: 'Emirates Living',
        },
    ];
    return (
        <div>
            <div>
                <h1 className="text-5xl my-16 text-center font-semibold mb-5 text-gray-500">OUR SERVICES</h1>
            </div>
            <div className="flex flex-wrap mx-4 justify-evenly p-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {cardsData.map((card1, index) => (
                        <Card1 key={index} imagePath={card1.imagePath} heading={card1.heading} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card1Container