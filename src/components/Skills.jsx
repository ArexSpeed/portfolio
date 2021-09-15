import {useState} from 'react'
import {SiHtml5, SiSass, SiReact, SiJavascript, SiTypescript, SiFigma, SiInkscape, SiBootstrap, SiNextDotJs,
        SiNodeDotJs, SiFirebase, SiGithub, SiWordpress, SiPhp, SiPostman, SiHeroku} 
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
        <div className="section-title-line"></div>
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
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("TypeScript")
              setDesc("Superset for JavaScript but thanks TS I can avoid a lot of basic errors in my projects. I can use TypeScript with all projects which earlier was written in javascript. I can change projects in React and Node to full support ts apps. ")
          }}
        >
          <SiTypescript className="skills-button-icon" />
          <p className="skills-button-text">TypeScript</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Figma")
              setDesc("Before I begin working on the code, it is a good idea to first design what I will be doing. Here Figma is helpful. I can design the visual part of application and testing how elements fit together and create prototypes and initial operation of given elements.")
          }}
        >
          <SiFigma className="skills-button-icon" />
          <p className="skills-button-text">Figma</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Inkscape")
              setDesc("Besides web app programming I like to create some graphic designs especially using vector graphics mainly different kinds of logotypes or business cards. All logos in my apps are made by me.")
          }}
        >
          <SiInkscape className="skills-button-icon" />
          <p className="skills-button-text">Inkscape</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Bootstrap")
              setDesc("Sometimes during work I use the ready-to-use library such as Bootstrap or Material Design to speed up my code development. Thanks to Bootstrap I can in an easy way create responsive apps and  efficiently add specific elements to websites such as carousels, sliders or dropdown lists.")
          }}
        >
          <SiBootstrap className="skills-button-icon" />
          <p className="skills-button-text">Bootstrap</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("JavaScript")
              setDesc("My main programming language. I can create apps either with VanillaJS and React. I can write JS apps with OOP and JS let me write new features for applications to static sites and also web games or computing programs. I really like to do a lot of operations on arrays.")
          }}
        >
          <SiJavascript className="skills-button-icon" />
          <p className="skills-button-text">JavaScript</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("CSS")
              setDesc("Styling is one of my favourite parts of FrontEnd work. I like to create and test different effects that CSS provides. I mostly use the sass preprocessor to build applications, thanks to features like mixins, loops or nesting working with css is more pleasant and efficient. I also like to use Styled-Components with React or module css.")
          }}
        >
          <SiSass className="skills-button-icon" />
          <p className="skills-button-text">CSS</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("HTML")
              setDesc("I can create layouts and good-looking websites with a lot of subsites and functions. I try to use as many as possible tags and new features that make working with HTML fatser and easier.")
          }}
        >
          <SiHtml5 className="skills-button-icon" />
          <p className="skills-button-text">HTML</p>
        </div>
        <div
          className={skill === 'Frontend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("React")
              setDesc("Currently my favourite technology to create web apps. I used React for most of my projects, I can use all of the basic hooks and create custom hooks. I use either Redux or ContextAPI to manage state depending on the size of the project. For my projects I use functional components, but if it is required to support older applications, there is no problem to write apps with the class component.")
          }}
        >
          <SiReact className="skills-button-icon" />
          <p className="skills-button-text">React</p>
        </div>
        
       {/* Backend */}
        
       <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Database")
              setDesc("Creating and configuring databases as well as working with SQL to select designated data and sort or configure it. I mostly use MongoDB as a database and Firestore, but I am also skilled in relational databases like MySQL and PostgreSQL.")
          }}
        >
          <GiDatabase className="skills-button-icon" />
          <p className="skills-button-text">Database</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Github")
              setDesc("The most important tools in a developer job. I use git to store my projects and their changelog so that if I make a mistake I can easily revert to the correct version, and I also use exercise files from courses I've taken so that I can easily go back and analyse a section.")
          }}
        >
          <SiGithub className="skills-button-icon" />
          <p className="skills-button-text">Github</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("CMS")
              setDesc("I can create websites in Wordpress and install it on every server. Creation of page layouts using appropriate plug-ins and configuration of plug-ins according to the client's needs, such as better performance, SEO or custom tables. For more specific apps I use Strapi which is a great option.")
          }}
        >
          <SiWordpress className="skills-button-icon" />
          <p className="skills-button-text">CMS</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Hosting")
              setDesc("For hosting my app I use tools like Firebase, Heroku, Vercel or Netlify. I use Firebase to host apps and also as a database by firestore, which is very useful for me thanks to real time function. Authentication with Firebase is also very comfortable to use for me. I can also set basic firebase rules for a firestore. I use heroku to host applications developed in Node JS.")
          }}
        >
          <SiFirebase className="skills-button-icon" />
          <p className="skills-button-text">Hosting</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("PHP")
              setDesc("I have a basic knowledge of PHP, which let me create a CRUD app or simply ecommerce shop. I can connect php code with MySql database and secure a custom register or login form.")
          }}
        >
          <SiPhp className="skills-button-icon" />
          <p className="skills-button-text">PHP</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Postman")
              setDesc("I can test API created in Node e.g checking for correct operation the implementation of functions such GET, POST, PUT or DELETE. Setting the relevant environment variables for a specific project.")
          }}
        >
          <SiPostman className="skills-button-icon" />
          <p className="skills-button-text">Postman</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Next")
              setDesc("Amazing framwork for both frontend and backend tasks. Currently I use NextJS for create fullstack application. I can integrate Next app with payments gate like Strapi or Paypal, make full authenticated app with Next-Auth. NextJs gives me a great opportunity with easy integration with database using ORM like Prisma and easy hosting with vercel.")
          }}
        >
          <SiNextDotJs className="skills-button-icon"/>
          <p className="skills-button-text">Next.js</p>
        </div>
        <div
          className={skill === 'Backend' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Node")
              setDesc("I use node together with express to create simple server applications. I can create an API with node and connect app with server. I like structured work in node  so in my applications I separate specific functions into categories like schema, routes or controllers.")
          }}
        >
          <SiNodeDotJs className="skills-button-icon" />
          <p className="skills-button-text">Node</p>
        </div>

        {/* SoftSkill */}
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Problem solve")
              setDesc("If there is a problem I can focus on what is not functioning and then discuss to set an optimal goal and solution to the problem.")
          }}
        >
          <BiMessageCheck className="skills-button-icon" />
          <p className="skills-button-text">Problem solve</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Negotiate")
              setDesc("I can present myself and my offer favourably. I can control my emotions and always try to reach an agreement so that both parties are satisfied with the objective of the negotiation. I also have the ability to defuse various contentious situations within a team.")
          }}
        >
          <FaHandsHelping className="skills-button-icon" />
          <p className="skills-button-text">Negotiate</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Communication")
              setDesc("I am an open and communicative person, sometimes too much so, but I try to express my messages clearly and lucidly. I am also a good listener, concentrating on what my conversation partner says so as to avoid any misunderstandings.")
          }}
        >
          <ImBubbles className="skills-button-icon" />
          <p className="skills-button-text">Communication</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Creativity")
              setDesc("I am a very creative person. Often during the creation of a project I already have further ideas for improvements or creating something for the next time. Creativity and imagination are one of my best strengths. I think outside the box so I can find many interesting solutions.")
          }}
        >
          <HiLightBulb className="skills-button-icon" />
          <p className="skills-button-text">Creativity</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Working under pressure")
              setDesc("I am able to divide tasks in a proper way so that they are all carried out well. I am capable of planning my work in order to solve a problem before it occurs and to get rid of a stressful situation as quickly as possible.")
          }}
        >
          <GiOppression className="skills-button-icon" />
          <p className="skills-button-text">Working under pressure</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Team working")
              setDesc("Cooperation and support of others is very important in projects, that's why I am a person who can play in a team and help others or perform tasks together to achieve the best result of the team.")
          }}
        >
          <RiTeamFill className="skills-button-icon" />
          <p className="skills-button-text">Team working</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Flexibility")
              setDesc("I am willing to undertake various tasks and challenges. I like to learn new things and have knowledge of many fields or technologies, so if there is a need to do something different, new, it is not a problem for me. I am open to any proposal.")
          }}
        >
          <GiFlexibleStar className="skills-button-icon" />
          <p className="skills-button-text">Flexibility</p>
        </div>
        <div
          className={skill === 'Soft' ? 'skills-button active' : 'skills-button'}
          onClick={() => {
              setTitle("Management")
              setDesc("I have experience in leading teams, usually where I am involved I have some sort of management role, so I can distribute tasks appropriately to group members and ensure that everything is done right.")
          }}
        >
          <ImUserTie className="skills-button-icon" />
          <p className="skills-button-text">Management</p>
        </div>

        <article className="skills-circle-text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>

      </section>

      <section className="skills-circle-text-mobile">
          <h3>{title}</h3>
          <p>{desc}</p>
        </section>
      
    </div>
  )
}

export default Skills
