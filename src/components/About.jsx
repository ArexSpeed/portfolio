import { useEffect, useRef } from 'react';

const About = () => {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    scrollRef.current.onscroll = () => {
      const value = scrollRef.current.scrollTop;
      const calc = 0 - 1500 + value;
      titleRef.current.style.left = calc + 'px';
    }
  }, []);

  return (
    <div className="about" id="about">
      <section className="section-title next">
        <div className="section-title-line"></div>
        <h1 className="section-title-text">
          ABOUT ME
        </h1> 
        <div className="section-title-line"></div>
      </section>
      <section className="about-section">
        <div className="about-boxin">
          <article className="about-title" ref={titleRef}>
            <div className="about-title-box">
              <div className="about-title-div">Future</div>
              <div className="about-title-div">Hobby</div>
              <div className="about-title-div">Story</div>
              <div className="about-title-div">Intro</div>
            </div>
          </article>
          <div className="about-boxin-shadow"></div>
        </div>
        <article className="about-description" ref={scrollRef}>
          <div className="about-description-box">
            <p className="about-description-text">
              Hi! I am Arek, I am a web apps creator. I am a fan of new technologies, science and sport. I like travel and explore new places. I am a person who likes new challenges and does not give up before reaching the goal. I am a very creative person with a big imagination, so you can not expect boredom and lack of tasks with me.
            </p>
          </div>
          <div className="about-description-box">
            <p className="about-description-text">
              My programming journey began in school when I created the first websites for friends and local companies. My main activity is writing applications in JavaScript mainly using React and Next. For some time I was interested in graphics and I was creating logos for companies, posters and short films with special effects. I graduated Poznan University of Technology where I learned the basics of SQL, Java and C++. My favorite technology is JavaScript in which I created a few web apps and most of them you can check on this website below.
            </p>
          </div>
          <div className="about-description-box">
            <p className="about-description-text">
              I am interested in new technology, physics and sport. I try to stay up to date with what's new in the world of technology. I used to play team sports like volleyball and football. Now I run half marathons and the goal is still the marathon. I am also a fan of all kinds of sports statistics and reports, that’s why I have created a blog, channel and instagram SportStory.
              I am also interested in personal development and management, so I like to read books on this subject and my favorite authors are Dale Carnegie, Brian Tracy and Napoleon Hill.
            </p>
          </div>
          <div className="about-description-box" style={{height: '600px'}}>
            <p className="about-description-text">
              I would like to become an expert in my field of programming, I’m going  to create new and better applications that will be used on a daily basis and I have a lot of ideas for these applications. It's important to step forward every day and increase my knowledge.
            </p>
          </div>
        </article>
      
      </section>

    </div>
  )
}

export default About
