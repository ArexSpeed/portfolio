import React from 'react'

const About = () => {
  return (
    <div className="about" id="about">
      {/* <div className="about-triangle-up"></div> */}
      <section className="section-title next">
        <h1 className="section-title-text">
          ABOUT ME
        </h1> 
      </section>
      <section className="about-desc">
        <div className="about-desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique doloremque harum possimus dolor enim cum facilis amet. Molestiae magnam ipsa, quisquam consectetur, voluptatibus quia sequi commodi facere inventore voluptate tempore? Rem laboriosam hic consectetur perferendis ipsum maiores debitis ab autem, iste assumenda eveniet itaque perspiciatis ut dolorum rerum quod cumque placeat omnis quibusdam est dolores ducimus dignissimos! Culpa quae magni soluta pariatur? Dicta ea ipsam adipisci minus iste, repellendus vel asperiores voluptatum incidunt non architecto error perferendis aliquam eveniet obcaecati vero molestiae necessitatibus dolorem, natus culpa doloremque unde tenetur corporis! Obcaecati ipsa dignissimos quo ab provident velit sint quod modi autem repellat rerum nesciunt nihil voluptatem optio voluptatibus laudantium dicta, possimus labore quam beatae sit aperiam exercitationem sequi? Aspernatur, sit! Unde obcaecati exercitationem praesentium dignissimos iusto ipsa excepturi cum, consequatur nemo dolores molestias quaerat? Atque esse possimus voluptate enim est qui aliquid saepe deserunt dolores! Facere expedita magni ab nulla atque tempora. Velit officiis deserunt pariatur magni accusantium corporis dolores nobis voluptatibus soluta expedita, eaque aspernatur maxime eos quibusdam perspiciatis assumenda numquam molestiae. Tempora atque debitis officia dolore, odio dolorem velit nisi facilis reiciendis saepe harum beatae alias magni aspernatur ea quas, vel at ad necessitatibus asperiores ipsum. Corporis.
        </div>
      </section>
      <svg>
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
          <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
      {/* <div className="about-triangle-down"></div> */}
    </div>
  )
}

export default About
