import type { JSX } from 'react';
import './skills.scss'
import { useTranslation } from 'react-i18next';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiRedux,
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiMui,
  SiExpress,
  SiGit,
  SiBitbucket,
  SiPostman,
  SiJirasoftware,
  SiAndroidstudio,
  SiGnometerminal,
  SiSourcetree,
  SiDocker
} from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';

function SkillsSection() {

  const { t: translate } = useTranslation('myskills');

  const skills = translate('skills', { returnObjects: true }) as {
    skillname: string;
  }[];

  const skillIcons: Record<string, JSX.Element> = {
    "JavaScript": <SiJavascript size={40} color='#F7DF1E' />,
    "TypeScript": <SiTypescript size={40} color='#3178C6' />,
    "React": <SiReact size={40} color='#61DAFB' />,
    "Angular": <SiAngular size={40} color='#DD1100' />,
    "Node.js": <SiNodedotjs size={40} color='#5FA04E' />,
    "Redux": <SiRedux size={40} color='#764ABC' />,
    "HTML": <SiHtml5 size={40} color='#E34F26' />,
    "Bootstrap": <SiBootstrap size={40} color='#7952B3' />,
    "CSS": <SiCss3 size={40} color='#467CD5' />,
    "Material UI": <SiMui size={40} color='#007FFF' />,
    "Express": <SiExpress size={40} color='#69D3A7' />,
    "Git": <SiGit size={40} color='#F05032' />,
    "Bitbucket": <SiBitbucket size={40} color='#0052CC' />,
    "SourceTree": <SiSourcetree size={40} color='#0052CC' />,
    "Postman": <SiPostman size={40} color='#FF6C37' />,
    "Jira": <SiJirasoftware size={40} color='#0052CC' />,
    "Android Studio": <SiAndroidstudio size={40} color='#3DDC84' />,
    "UNIX/CLI": <SiGnometerminal size={40} color='#4A86CF' />,
    "Docker": <SiDocker size={40} color='#2496ED' />,
    "Java": <FontAwesomeIcon icon={faJava} style={{ fontSize: '40px', color: '#007396' }} color="#007396" />
  };

  return (
    <>
      <div id='skills' className="app-skills-container">
        <div className='skills-main-container'>
          <div className='work-tittle-section'>
            <h2 className='skilltittle'>{translate('title')}</h2>
            <p className='skilldescription'>{translate('description')}</p>
          </div>
          <div className='skils-section'>
            <div className='skills-cards-container'>
              {skills.map((skill, index) => (
                <div className='skill-card' key={index}>
                  {skillIcons[skill.skillname]}
                  <h4 className='skill-card-text'>{skill.skillname}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsSection;