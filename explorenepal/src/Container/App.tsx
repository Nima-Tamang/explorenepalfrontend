import {Navbar,Footer} from '../Components/Layout'
import {Routes,Route} from 'react-router-dom'
import {Home, NotFound} from '../Pages/index'
import DestinationDetails from '../Components/Page/Destination/DestinationDetails'

function App() {


  return (
    <>
      <Navbar/>
      <div className='pb-5'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route
            path="/destinationdetails/:code" 
            element={<DestinationDetails/>} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
