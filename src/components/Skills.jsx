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
  const titleStart = 'Skill wheel'
  const descStart = 'Select a skill and read the description to find out what I know about the technology and what I use it for. Here I present my skills related to creating both frontend and backend side while building an application. And also my strong soft skills that help me to work effectively in all situations '
 
  const [skill, setSkill] = useState('Frontend')
  const [title, setTitle] = useState(titleStart)
  const [desc, setDesc] = useState(descStart)
   return (
    <div className="skills" id="skills">

      <section className="section-title next">
        <h1 className="section-title-text">
          MY SKILLS
        </h1> 
      </section>

      <section className="skills-select">
          <button 
            className="skills-select-button" 
            onClick={() => {
              setSkill('Frontend')
              setTitle(titleStart)
              setDesc(descStart)
            }}>
              <h3 className="skills-select-button-up"><div className="skills-select-button-circle"></div>FRONTEND</h3>
              <h4 className="skills-select-button-down">DESIGN</h4>
          </button>
          <button 
            className="skills-select-button" 
            onClick={() => {
              setSkill('Backend')
              setTitle(titleStart)
              setDesc(descStart)
            }}>
              <h3 className="skills-select-button-up middle"><div className="skills-select-button-circle middle"></div>BACKEND</h3>
              <h4 className="skills-select-button-down middle">DEPLOY</h4>
          </button>
          <button 
            className="skills-select-button" 
            onClick={() => {
              setSkill('Soft')
              setTitle(titleStart)
              setDesc(descStart)
            }}>
              <h3 className="skills-select-button-up"><div className="skills-select-button-circle"></div>SOFT</h3>
              <h4 className="skills-select-button-down">SKILLS</h4>
          </button>
      </section>

      <section className="skills-circle">
        
        {/* Frontend */}
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiNextDotJs className="skills-button-icon"/>
          <p className="skills-button-text">Next.js</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiFigma className="skills-button-icon" />
          <p className="skills-button-text">Figma</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiInkscape className="skills-button-icon" />
          <p className="skills-button-text">Inkscape</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiBootstrap className="skills-button-icon" />
          <p className="skills-button-text">Bootstrap</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiJavascript className="skills-button-icon" />
          <p className="skills-button-text">JavaScript</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiSass className="skills-button-icon" />
          <p className="skills-button-text">CSS</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiHtml5 className="skills-button-icon" />
          <p className="skills-button-text">HTML</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("React")
              setDesc("Opis do Reacta co umiem i co powinienem jeszcze sie nauczyc jakie moga byc aplikacja zwiazane z tym frameworkiem")
          }}
        >
          <SiReact className="skills-button-icon" />
          <p className="skills-button-text">React</p>
        </div>
        
       {/* Backend */}
        
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiDatabase className="skills-button-icon" />
          <p className="skills-button-text">Database</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiGithub className="skills-button-icon" />
          <p className="skills-button-text">Github</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiWordpress className="skills-button-icon" />
          <p className="skills-button-text">Wordpress</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiHeroku className="skills-button-icon" />
          <p className="skills-button-text">Heroku</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiFirebase className="skills-button-icon" />
          <p className="skills-button-text">Firebase</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiPhp className="skills-button-icon" />
          <p className="skills-button-text">PHP</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiMongodb className="skills-button-icon" />
          <p className="skills-button-text">MongoDB</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiNodeDotJs className="skills-button-icon" />
          <p className="skills-button-text">Node</p>
        </div>

        {/* SoftSkill */}
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <BiMessageCheck className="skills-button-icon" />
          <p className="skills-button-text">Problem solve</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <FaHandsHelping className="skills-button-icon" />
          <p className="skills-button-text">Negotiate</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <ImBubbles className="skills-button-icon" />
          <p className="skills-button-text">Comunication</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <HiLightBulb className="skills-button-icon" />
          <p className="skills-button-text">Creativity</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <GiOppression className="skills-button-icon" />
          <p className="skills-button-text">Working under pressure</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <RiTeamFill className="skills-button-icon" />
          <p className="skills-button-text">Team working</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <GiFlexibleStar className="skills-button-icon" />
          <p className="skills-button-text">Flexibility</p>
        </div>
        <div className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}>
          <ImUserTie className="skills-button-icon" />
          <p className="skills-button-text">Managment</p>
        </div>

        <article className="skills-circle-text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>

      </section>
      
    </div>
  )
}

export default Skills