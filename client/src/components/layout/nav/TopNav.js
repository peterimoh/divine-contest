import React from 'react'
import styled from 'styled-components'

const TopNav = () => {
    return (
      <TopNavWrapper>
        <div class='header-top-area hidden-sm'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-6 col-md-6 col-sm-6'>
                <div class='header-top-left'>
                  <ul>
                    <li>
                      <i class='fa fa-phone'></i>
                      <a href='tel:+985-2356-14566'>+985-2356-14566</a>
                    </li>
                    <li>
                      <i class='fa fa-envelope-o'></i>
                      <a href='mailto:support@teengirlsup.com'>
                        support@teengirlsup.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-6'>
                <div class='right-side-tool text-right'>
                  <div class='social-media-area'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i class='fa fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-rss'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-pinterest-p'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-linkedin'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class='fa fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class='header-top-right'>
                    <ul>
                      <li>
                        <i class='fa fa-users'></i>
                        <a href='registration.html'>Login/Registration</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopNavWrapper>
    );
}


const TopNavWrapper = styled.div`
  .header-top-area {
    background: #d32f2f;
    padding: 10px 0;
  }

  .header-top-area .header-top-left ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .header-top-area .header-top-left ul li {
    display: inline;
    margin-right: 25px;
    color: #ffffff;
  }
  .header-top-area .header-top-left ul li i {
    font-weight: 600;
    font-size: 14px;
    margin-right: 10px;
    color: #ffffff;
  }
  .header-top-area .header-top-left ul li a {
    transition: all 0.5s ease 0s;
    color: #ffffff;
  }
  .header-top-area .header-top-left ul li a:hover {
    color: #e6e6e6;
  }
  .header-top-area .social-media-area {
    display: inline-block;
    margin-right: 25px;
  }
  .header-top-area .social-media-area ul li {
    display: inline-block;
    margin: 2px;
  }
  .header-top-area .social-media-area ul li a {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #ffffff;
    transition: all 0.5s ease 0s;
    text-decoration: none;
  }
  .header-top-area .social-media-area ul li a:hover {
    color: #e6e6e6;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
  }
  .header-top-area .social-media-area ul li a i {
    text-align: center;
    display: inline-block;
  }
  .header-top-area .social-media-area ul li:last-child {
    border-right: 1px solid #fff;
    padding-right: 30px;
  }
  .header-top-area .header-top-right {
    display: inline-block;
  }
  .header-top-area .header-top-right ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .header-top-area .header-top-right ul li {
    display: inline-block;
  }
  .header-top-area .header-top-right ul li a {
    color: #ffffff;
    transition: all 0.5s ease 0s;
  }
  .header-top-area .header-top-right ul li a:hover {
    color: #e6e6e6;
  }
  .header-top-area .header-top-right ul li i {
    font-weight: 600;
    font-size: 14px;
    margin-right: 10px;
    color: #ffffff;
  }
  .header-middle-area {
    background: #ffffff;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .header-middle-area .logo-area {
    padding: 27px 0 0;
  }
  .header-middle-area .logo-area a {
    font-weight: 900;
    font-size: 27px;
    color: #d32f2f;
    display: block;
    text-transform: lowercase;
    position: relative;
  }
  .header-middle-area .logo-area a img {
    display: inline-block;
  }
  .header-middle-area .main-menu ul {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .header-middle-area .main-menu ul li {
    display: inline-block;
    padding: 30px 15px;
    position: relative;
    /* Dropdown Menu area */
  }
  .header-middle-area .main-menu ul li a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    color: #444444;
    font-weight: 500;
    transition: all 0.5s ease 0s;
    font-family: 'Poppins', sans-serif;
  }
  .header-middle-area .main-menu ul li a i {
    margin-left: 10px;
    color: #444444;
  }
  .header-middle-area .main-menu ul li.active a {
    color: #d32f2f;
  }
  .header-middle-area .main-menu ul li.active a i {
    margin-left: 10px;
    color: #d32f2f;
  }
  .header-middle-area .main-menu ul li.active a:hover a {
    color: #d32f2f;
  }
  .header-middle-area .main-menu ul li.active a:hover a i {
    margin-left: 10px;
    color: #d32f2f;
  }
  .header-middle-area .main-menu ul li:hover a {
    color: #d32f2f;
  }
  .header-middle-area .main-menu ul li:hover a i {
    margin-left: 10px;
    color: #d32f2f;
  }
  .header-middle-area .main-menu ul li ul {
    background: #ffffff;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 100%;
    transform: scaleY(0);
    transform-origin: 0 0 0;
    transition: all 0.5s ease 0s;
    width: 200px;
    z-index: 99999 !important;
    text-align: left;
    visibility: hidden;
  }
  .header-middle-area .main-menu ul li ul li {
    display: block;
    border-top: 1px dashed #dddddd;
    margin: 0;
    padding: 0;
    border-right: 0px solid transparent;
  }
  .header-middle-area .main-menu ul li ul li:last-child {
    border-bottom: 0;
  }
  .header-middle-area .main-menu ul li ul li a {
    display: block;
    padding: 6px 20px;
    text-transform: none;
    transition: all 0.5s ease 0s;
    color: #444444 !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
  .header-middle-area .main-menu ul li ul li a:hover {
    padding-left: 30px;
    color: #d32f2f !important;
  }
  .header-middle-area .main-menu ul li:hover ul {
    opacity: 1;
    transform: scaleY(1);
    visibility: visible;
  }
  .header-middle-area .cart-area {
    transition: all 0.5s ease 0s;
    margin-right: 20px;
    text-align: right;
  }
  .header-middle-area .cart-area a {
    padding: 30px 0;
    display: block;
    transition: all 0.5s ease 0s;
    position: relative;
  }
  .header-middle-area .cart-area a span {
    position: absolute;
    right: -15px;
    top: 13px;
    color: #ffffff;
    width: 30px;
    height: 30px;
    background: #d32f2f;
    text-align: center;
    border-radius: 50%;
  }
  .header-middle-area .cart-area a:hover {
    color: #d32f2f;
  }
  .header-middle-area .cart-area a:hover i {
    color: #d32f2f;
  }
  .header-middle-area .cart-area a i {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #444444;
  }
  .header-middle-area.stick {
    background: #ffffff;
    position: fixed !important;
    top: 0px;
    z-index: 9999;
    margin: 0 auto !important;
    padding: 0;
    left: 0;
    right: 0;
    -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-name: sticky-animation;
    animation-name: sticky-animation;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .header-middle-area.stick .main-menu ul li a {
    color: #444444;
  }
  .header-middle-area.stick .menuright ul li a {
    color: #444444;
  }
  .mobile-menu-area {
    display: none;
  }
  .mobile-menu-area .mobile-logo-area {
    position: relative;
    padding: 3px 0 0;
  }
  .mobile-menu-area .mobile-logo-area img {
    position: absolute;
    left: 0;
  }
  @-webkit-keyframes sticky-animation {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
  }
  @keyframes sticky-animation {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default TopNav
