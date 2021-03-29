import {useState} from 'react'
import {SiHtml5,SiSass,SiReact, SiJavascript, SiFigma, SiInkscape, SiBootstrap, SiNextDotJs,
        SiNodeDotJs, SiFirebase, SiGithub, SiWordpress, SiPhp, SiMongodb, SiHeroku} 
from 'react-icons/si'
import {GiDatabase, GiOppression, GiFlexibleStar} from 'react-icons/gi'
import {ImUserTie, ImBubbles} from 'react-icons/im'
import {FaHandsHelping} from 'react-icons/fa'
import {HiLightBulb} from 'react-icons/hi'
import {RiTeamFill} from 'react-icons/ri'
import {BiMessageCheck} from 'react-icons/bi'


const Skills = () => {
  const [skill, setSkill] = useState('Frontend')
  return (
    <div className="skills" id="skills">

      <section className="section-title next">
        <h1 className="section-title-text">
          MY SKILLS
        </h1> 
      </section>
      <section className="skills-circle">
        
        {/* Frontend */}
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiNextDotJs style={{ fontSize: 40 }} />
          <p className="skills-button-text">Next.js</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiFigma style={{ fontSize: 40 }} />
          <p className="skills-button-text">Figma</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiInkscape style={{ fontSize: 40 }} />
          <p className="skills-button-text">Inkscape</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiBootstrap style={{ fontSize: 40 }} />
          <p className="skills-button-text">Bootstrap</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiJavascript style={{ fontSize: 40 }} />
          <p className="skills-button-text">JavaScript</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiSass style={{ fontSize: 40 }} />
          <p className="skills-button-text">CSS</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiHtml5 style={{ fontSize: 40 }} />
          <p className="skills-button-text">HTML</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiReact style={{ fontSize: 40 }} />
          <p className="skills-button-text">React</p>
        </div>
        
       {/* Backend */}
        
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiDatabase style={{ fontSize: 40 }} />
          <p className="skills-button-text">Database</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiGithub style={{ fontSize: 40 }} />
          <p className="skills-button-text">Github</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiWordpress style={{ fontSize: 40 }} />
          <p className="skills-button-text">Wordpress</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiHeroku style={{ fontSize: 40 }} />
          <p className="skills-button-text">Heroku</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiFirebase style={{ fontSize: 40 }} />
          <p className="skills-button-text">Firebase</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiPhp style={{ fontSize: 40 }} />
          <p className="skills-button-text">PHP</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiMongodb style={{ fontSize: 40 }} />
          <p className="skills-button-text">MongoDB</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiNodeDotJs style={{ fontSize: 40 }} />
          <p className="skills-button-text">Node</p>
        </div>

        {/* SoftSkill */}
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <BiMessageCheck style={{ fontSize: 40 }} />
          <p className="skills-button-text">Problem solve</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <FaHandsHelping style={{ fontSize: 40 }} />
          <p className="skills-button-text">Negotiate</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <ImBubbles style={{ fontSize: 40 }} />
          <p className="skills-button-text">Comunication</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <HiLightBulb style={{ fontSize: 40 }} />
          <p className="skills-button-text">Creativity</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <GiOppression style={{ fontSize: 40 }} />
          <p className="skills-button-text">Working under pressure</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <RiTeamFill style={{ fontSize: 40 }} />
          <p className="skills-button-text">Team working</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <GiFlexibleStar style={{ fontSize: 40 }} />
          <p className="skills-button-text">Flexibility</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <ImUserTie style={{ fontSize: 40 }} />
          <p className="skills-button-text">Managment</p>
        </div>

      </section>
      <section className="skills-select" style={{marginBottom: '50px'}}>
          <button onClick={() => setSkill('Frontend')}>Frontend</button>
          <button onClick={() => setSkill('Backend')}>Backend</button>
          <button onClick={() => setSkill('Soft')}>Soft Skill</button>
      </section>
    </div>
  )
}

export default Skills
