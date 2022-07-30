import { useState, useEffect } from 'react'
import stationsService from '../services/stationsService'
import StationRow from './StationRow'
import Pagination from './Pagination'

const StationsList = () => {

  const [stations, setStations] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    stationsService.getStations(currentPage).then(stations =>{
      setStations(stations)
    }
    )
  }, [currentPage])


  const prevPage = () => {
    setCurrentPage(currentPage-1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage+1)
  }

  return (
    <div>
      <h1>Stations</h1>
      <table>
        <thead><tr><th>Name</th><th>Address</th></tr></thead>
        <tbody>
          {stations.map(station => 
            <StationRow key={station._id} station={station} />)}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} prevPage={prevPage}
        nextPage={nextPage}/>
    </div>
  )
}

export default StationsList