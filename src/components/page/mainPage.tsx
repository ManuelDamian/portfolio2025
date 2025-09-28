import './mainPage.scss'
import Navbar from '../navabar/navbar'
import AllSections from '../allsections/allsections'

function Main_Page() {

  return (
    <>
      <div className="app-mainPage-container">
        <Navbar />
        <div className='app-mainPage-content'>
          <AllSections />
        </div>
      </div>
    </>
  )
}

export default Main_Page
