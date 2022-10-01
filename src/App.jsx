import React from 'react'
import Navbar from './components/Navbar'
import Place from './components/Place'
import Data from './data'

function App() {

    const dataElement = Data.map(function(data){
      return(
        <Place 
          key={data.id}
          title={data.title}
          location={data.location}
          googleMapsUrl={data.googleMapsUrl}
          startDate={data.startDate}
          endDate={data.endDate}
          description={data.description}
          imageUrl={data.imageUrl}
        />
      )
    })
    
  return (
    <div className="w-full max-w-lg mx-auto border bg-white">
      <Navbar />
      <div className='flex flex-col mx-8 mt-8'>
        {dataElement}
      </div>
    </div>
  )
}

export default App
