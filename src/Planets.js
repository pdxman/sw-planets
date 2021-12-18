import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Planets(){
    const [planets, setPlanets] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        
        const loadPost = async () => {  
            
            setIsLoading(true)

            const response = await axios.get('https://www.swapi.tech/api/planets')
            setPlanets(response.data.results)
            console.log(response.data.results)
            // fetch('https://www.swapi.tech/api/planets')
            // .then(response => response.json())
            // .then(stuff => setPlanets(stuff.results))
            // .then(stuff => console.log(planets))
            
            setIsLoading(false)
        
        }
        loadPost()
    }, [])
   
    
    return(
        <div>
            <p>here's gonna be some planet stuff!</p>
            {/* <p>{isLoading && 'Loading...'}</p> */}
        <ul>
            {isLoading ? (<h2>Loading...</h2>) : (planets.map(planet => (
                <li key={planet.uid} style={{listStyle: 'none'}}>{planet.name}</li>
            )))}
        </ul>
        </div>
    )
}