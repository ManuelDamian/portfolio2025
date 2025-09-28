import './home.scss'
import { useTranslation } from 'react-i18next';
import { scrollToContact } from '../../navabar/scrollhelpers';

function Home() {

  const { t: translate } = useTranslation('home');

  return (
    <>
      <div id='home' className="app-home-container">
        <div className='home-container'>
          <div className='home-tittle-secction'>
            <div className='homeinfo'>
              <h2 className='jobInfo'>{translate('job')}</h2>
              <h1 className='name'> {translate('name')}</h1>
              <p className=''>{translate('greetings')}</p>
              <div className='homeBtnsContainer'>
                <a href="#contact" className='contactbutton' onClick={scrollToContact} > {translate('contactme')} </a>
                <a className='downloadButton' href="/CV2025.pdf" download="CV2025.pdf"> {translate('downloadcv')} </a>
              </div>
            </div>
          </div>
          <div className='home-photo-section'>
            <div className='pictureContainer'>
              <img className='picture' src='/mainpicture.png' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
