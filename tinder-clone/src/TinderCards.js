import React, { useState } from 'react';
import './TinderCards.css'; 
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://en.wikipedia.org/wiki/Elon_Musk#/media/File:Elon_Musk_Royal_Society_(crop1).jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://en.wikipedia.org/wiki/Jeff_Bezos#/media/File:Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_(39074799225)_(cropped).jpg"
        },
        {
            name: "Warren Buffett",
            url: "https://en.wikipedia.org/wiki/Warren_Buffett#/media/File:Warren_Buffett_with_Fisher_College_of_Business_Student_-_4395161160_(cropped).jpg"
        },
        {
            name: "Larry Ellison",
            url: "https://en.wikipedia.org/wiki/Larry_Ellison#/media/File:Larry_Ellison_picture.png"
        }
    ]);


    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person)=> (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div className='card' style={{ backgroundImage: `url(${person.url})`}}>
                                <div className='cardContent'>
                                    <h3>{person.name}</h3>
                                </div>  
                            </div>
                        </TinderCard>
                    ))}
            </div>

            
            
        </div>
    )
}

export default TinderCards;
