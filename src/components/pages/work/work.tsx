import './work.scss'
import { useTranslation } from 'react-i18next';

function Work() {

  const { t: translate } = useTranslation('mywork');

  const jobs = translate('jobs', { returnObjects: true }) as {
    name: string;
    date: string;
    position: string;
  }[];

  return (
    <>
      <div id='work' className="app-work-container">
        <div className='hello'>

          <div className='work-tittle-section'>
            <h2 className='worktittle'>{translate('Experience')}</h2>
            <p className='workdescription'>{translate('description')}</p>
          </div>
          <div className='work-jobs-section'>
            <div className='jobs-cards-container'>
              {jobs.map((job, index) => (
                <div className='job-card' key={index}>
                  <h4 className='jobname'>{job.name}</h4>
                  <span className='jobdate'>{job.date}</span>
                  <p className='jobposition'>{job.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work;