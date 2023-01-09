import React from 'react'
import "./portfolio.css"
import IMG from '../../assets/portfolio_pic.PNG'

const data = [
  {
    id: 1,
    img: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id: 2,
    img: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization 2",
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id: 3,
    img: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization 3",
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id: 4,
    img: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization 4",
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id: 5,
    img: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization 5",
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id: 6,
    img: IMG,
    title: "Crypto Currency Dashboard & Financial Visualization 6",
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  }
]

 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
        data.map(({id, img, title, github, demo}) => {
          return (

            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"> 
                <img src={img} alt={title}/> 
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} rel="noreferrer" target="_blank" className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })
        }
      </div>

    </section>
  )
}

export default Portfolio
