import React from 'react';
import { Button } from './Button';

function Introduction() {
  return (
    <div className="intro" id="home">
        <div className="write__up">
            <h2 className="intro__title">
                Transforming your business with bespoke Technology Solutions
            </h2>
            <p className="intro__p">
                We are a Multi-Competency, Enterprise Transformation & Technology Consulting Firm. We combine expertise and capabilities across many industries and business functions to deliver superior value to our clients.
            </p>
            <div className="btn__int">
                <Button className='btns' buttonStyle='btn--outline' buttonRoute='/about-us' buttonSize='btn--medium'>
                    Read more <i className="fas fa-caret-right"/>
                </Button>
            </div>
        </div>
        <div className="intro__img"><img src="./bgs/first_img.png" alt="Tenece" className="intro__img"/></div>
    </div>
  )
}

export default Introduction;
