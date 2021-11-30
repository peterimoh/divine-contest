import React from 'react'
import './footer.css'

const Footer = () => {
    return (
      <div id='footer'>
        <p>
          &copy; Copyrights {new Date().getFullYear()} Teen Girls Up{' '}
          <span>
            Powered By <a href='https://wa.me/2349072193891'>DYF</a>{' '}
          </span>
        </p>
      </div>
    );
}

export default Footer
