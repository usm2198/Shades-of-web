import React from 'react'
import Card from '../component/Card';

function CardContainer() {
    const cardData = [
        {
            title: 'Arabian Ranches',
            description: 'Arabian Ranches offers a modern interpretation of the soothing charm of surrounding desertscape. The development features a number of residential communties that draw inspiration from spanish and',
            imagePath: require('../images/arabian-ranches.jpg'),
        },
        {
            title: 'Arabian Ranches II',
            description: 'Arabian Ranches offers a modern interpretation of the soothing charm of surrounding desertscape. The development features a number of residential communties that draw inspiration from spanish and ',
            imagePath: require('../images/arabian-ranches-ii.jpg'),

        },
        {
            title: 'Downtown Dubai',
            description: 'The Centre of Now. The most prestigious square kilometer in the world. Downtime Dubai is no stranger to such accolades, and yet its hard to overstate the prominence of this community is no stranger to ',
            imagePath: require('../images/downtown-dubai.jpg'),
        },
        {
            title: 'Dubai Hills Estate',
            description: 'Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully planned 2,700 acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City and the',
            imagePath: require('../images/dubai-hills-estate.jpg'),
        },
        {
            title: 'Dubai Mariana',
            description: 'Dubai Mariana is one of the worlds largest most meticulosusly planned waterfront developments and offers the exhilration and a vibrancy of chic, urban lifestyle together with all the advantages of living on the water',
            imagePath: require('../images/dubai-marina.png'),
        },
        {
            title: 'Emirates Living',
            description: 'Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates living offers a serene nature-filled sanctury, with 8,659 premium vilas nestled within 52.2 million',
            imagePath: require('../images/emirates-living.jpg'),

        },
    ];

    return (
        <div>
            <div>
                <h1 className="text-5xl mt-20 text-center font-semibold mb-5 text-gray-500 ">COMMUNITIES WE MANAGE</h1>
            </div>
            <div className="flex flex-wrap mx-4 justify-evenly p-4">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imagePath={card.imagePath}
                        description={card.description}
                        title={card.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardContainer
