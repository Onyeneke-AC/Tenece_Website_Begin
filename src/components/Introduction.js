import React from 'react'
// import Button from './Button'

function Introduction() {
  return (
    <section class="intro content_body" id="home">
        <div class="write__up">
            <h2 class="intro__title">
                Transforming your business with bespoke Technology Solutions
            </h2>
            <p class="intro__p">
                We are a Multi-Competency, Enterprise Transformation & Technology Consulting Firm. We combine expertise and capabilities across many industries and business functions to deliver superior value to our clients.
            </p>
            <div class="btn__int">
            <a href="#intro" class="intro__btn">
                Read more <span class="rot"><img src="./FontAwesomeicon-caret-right.png" alt="Read more"/></span>
            </a>
            </div>
        </div>
        <div class="intro__img"><img src="./bgs/first_img.png" alt="Tenece" class="intro__img"/></div>
    </section>
  )
}

export default Introduction;
