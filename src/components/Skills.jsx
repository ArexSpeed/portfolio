import {useState} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {SiSass} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BiShow} from 'react-icons/bi'
import {GiReturnArrow} from 'react-icons/gi'


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
          <SiReact style={{ fontSize: 40 }} />
          <p className="skills-button-text">React</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiReact style={{ fontSize: 40 }} />
          <p className="skills-button-text">React</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiReact style={{ fontSize: 40 }} />
          <p className="skills-button-text">React</p>
        </div>
        <div className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}>
          <SiReact style={{ fontSize: 40 }} />
          <p className="skills-button-text">React</p>
        </div>
        
       
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <AiFillStar style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <SiSass style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <BiShow style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiReturnArrow style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiReturnArrow style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiReturnArrow style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiReturnArrow style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
        <div className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}>
          <GiReturnArrow style={{ fontSize: 40 }} />
          <p className="skills-button-text">Sass</p>
        </div>
      </section>
      <section className="skills-select">
          <button onClick={() => setSkill('Frontend')}>Frontend</button>
          <button onClick={() => setSkill('Backend')}>Backend</button>
        </section>
    </div>
  )
}

export default Skills
