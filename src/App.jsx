import { useState } from 'react'

let accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN; //get from .env file

//no one can see accessToken online
console.log("Access Token", accessToken);

function App() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState({});

  function handleNewCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation(city);
  }
  function getLocation() {
    console.log("Getting Location Information for", city);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Explore!" onChange={handleNewCity} />
      </form>
    </>
  )
}

export default App
