// create your App component here
import React, {useState, useEffect} from 'react';

const App = () => {
    const[loading, setLoading] = useState(true)
    const[image, setImage] = useState()

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=> res.json())
        .then((img)=>saveImage(img))
    },[])

    const saveImage = (img) => {
        setImage(img.message)
        setLoading(false)
    }

    if (loading) return <p>Loading...</p>
    
    return <img src={image} alt='A Random Dog'/>
}
 
export default App;