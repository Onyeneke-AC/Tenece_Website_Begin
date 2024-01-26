import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Subscribe to our newsletter
        </p>
        <p className="footer-subscription-text">
            Email
        </p>
        <div className="input-areas">
            <form>
                <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                <Button buttonStyle='btn--subscribe'>
                    Submit
                </Button>
            </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Company</h2>
                <Link to='/sign-up'>Goals & Vision</Link>
                <Link to="/">Products & Services</Link>
                <Link to="/">Partners</Link>
                <Link to="/">Clients</Link>
            </div>

            <div class='footer-link-items'>
            <h2>Community</h2>
            <Link to='/'>News</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Contact Us</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Be Social</h2>
                <Link to='/' className="social-icon-link facebook" target='_blank' aria-label='Facebook'>
                    <i className="fab fa-facebook-f" />
                </Link>
                <Link to='/' className="social-icon-link instagram" target='_blank' aria-label='Instagram'>
                    <i className="fab fa-instagram" />
                </Link>
                <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <small className="website-rights">
                Copyright 2022 © Tenece Professional Services. All rights reserved.
            </small>
        </div>
        <div className="social-icons">
          <Link to="/" class="footer--privacy">
                IMS Policy Statement
          </Link>
          <Link to="/" class="footer--privacy">
                Privacy Policies
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Footer
