import React from 'react'

function Herohome() {
  return (
    <section className='herohome'>
        <div className="container">
            <div className="herohome-content">
                <h2 className="herohome-title">Développeur<br/>Front-end</h2>
            </div>
            <div class="wrapper">
                <div class="item item1"><h2 className="heading-slide">HTML</h2></div>
                <div class="item item2"><h2 className="heading-slide">CSS</h2></div>
                <div class="item item3"><h2 className="heading-slide">Javascript</h2></div>
                <div class="item item4"><h2 className="heading-slide">ReactJS</h2></div>
                <div class="item item5"><h2 className="heading-slide">NodeJS</h2></div>
                <div class="item item6"><h2 className="heading-slide">MongoDB</h2></div>
                <div class="item item7"><h2 className="heading-slide">SEO</h2></div>
            </div>
            <div className="scrolltoview">
            </div>
        </div>
    </section>
  )
}

export default Herohome