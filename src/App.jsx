import { useState } from 'react'

let accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN; //get from .env file

//no one can see accessToken online
console.log("Access Token", accessToken);

function App() {
  const [count, setCount] = useState(0)

  function handleNewCity(e) {

  }

  return (
    <>
      <form>
        <input placeholder="Type a City Name" />
      </form>
    </>
  )
}

export default App
