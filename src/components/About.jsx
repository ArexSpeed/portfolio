import React from 'react'

const About = () => {
  return (
    <div className="about" id="about">
      <section className="section-title next">
        <h1 className="section-title-text">
          ABOUT ME
        </h1> 
      </section>
      <section className="about-desc">
        
        <h4 className="about-desc-title">Who Am I?</h4>
        <div className="about-desc-circle"></div>
        <p className="about-desc-text">
        Hi! I am Arek, I live in Poznan, Poland and I create web apps. I am a fan of new technologies, science and sport. I like travel and explore new places. I am a person who likes new challenges and does not give up before reaching the goal. I am a very creative person with a big imagination, so you can not expect boredom and lack of tasks with me.
        </p>

        <h4 className="about-desc-title">My story</h4>
        <div className="about-desc-circle"></div>
        <p className="about-desc-text">
        My programming journey began in school when I created the first websites for friends and local companies. I participated in a couple of computer science competitions also with success. In high school I focused more on graphics and I created a lot of logotypes, posters and short movies with special effects also. I mainly used Gimp, Photoshop or After Effects for this. After high school I went to Poznan University of Technology, Physic Department where in addition to various engineering subjects and physics, I learned the basics of SQL, Java and C++, but my favorite language was still JavaScript. As an engineering thesis I created a browser game about playing the role of a sports team manager and managing it. After graduation I went abroad to the Netherlands where I worked in the logistics industry and became a team leader and was responsible for managing the team. Then after 1.5 years I went back to college to specialize IT management and went back to learning my favorite JavaScript to then become a full time programmer. During my study, I created projects like AXOffice, Clickscore, Neograd and more. I still want to grow and want to be a better programmer every day.
        </p>

        <h4 className="about-desc-title">My hobbies</h4>
        <div className="about-desc-circle"></div>
        <p className="about-desc-text">
        Besides programming, my hobbies include keeping up with technological news and, above all, sports, both active and passive. I used to play team sports like volleyball and football now I run half marathons and the goal is still the marathon. I am also a fan of all kinds of sports statistics and reports, that’s why I have created a blog, channel and instagram SportStory.
        I am also interested in personal development and management, so I like to read books on this subject and my favorite authors are Dale Carnegie, Brian Tracy and Napoleon Hill.
        </p>

        <h4 className="about-desc-title">My plans</h4>
        <div className="about-desc-circle"></div>
        <p className="about-desc-text">
        I would like to become an expert in my field of programming, I’m going  to create new and better applications that will be used on a daily basis and I have a lot of ideas for these applications. It's important to step forward every day and increase my knowledge.
        </p>
      </section>
      {/* <svg>
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
          <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg> */}
    </div>
  )
}

export default About
