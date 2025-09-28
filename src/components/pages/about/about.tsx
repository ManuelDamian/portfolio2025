import './about.scss'
import { useTranslation } from "react-i18next";

function AboutSection() {

  const { t: translate } = useTranslation('aboutme')

  return (
    <>
      <div id='aboutme' className="app-aboutmeC-container">
        <div className='aboutmeCinfo'>
          <h3 className='aboutmetittle' > {translate('title')}</h3>
          <p className='aboutmeDescription'> {translate('description')}</p>
        </div>
      </div>
    </>
  )
}

export default AboutSection;