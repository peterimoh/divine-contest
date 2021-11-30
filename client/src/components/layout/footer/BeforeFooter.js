import React from 'react';
import styled from 'styled-components';

const BeforeFooter = () => {
  return (
    <BeforeFooterWrapper id='before__footer'>
      <footer>
        <div class='footer-top-area pt-100 pb-100'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-3 col-md-4 col-sm-12'>
                <div class='single-footer footer-one'>
                  <h3>About Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum repellat, maxime vel alias impedit veritatis
                    temporibus, sequi quos veniam eius optio corporis modi dicta
                    molestias at inventore culpa, natus explicabo.
                  </p>
                  <div class='footer-social-media-area'>
                    <nav>
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
                    </nav>
                  </div>
                </div>
              </div>
              <div class='col-lg-3 col-md-4 hidden-sm'>
                <div class='single-footer footer-two'>
                  <h3>Twitter Feed</h3>
                  <nav>
                    <ul>
                      <li>
                        <i class='fa fa-twitter'></i> Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit.{' '}
                        <a href='#'>https://twitter.com/?lang=en</a>
                        <br /> 3 days ago
                      </li>
                      <li>
                        <i class='fa fa-twitter'></i> Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit.{' '}
                        <a href='#'>https://twitter.com/?lang=en</a>
                        <br /> 3 days ago
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class='col-lg-3 hidden-md col-sm-12'>
                <div class='single-footer footer-three'>
                  <h3>Flickr Photos</h3>
                  <ul>
                    <li>
                      <a href='#'>
                        <img src='images/1.png' alt='flicker photo' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='images/2.png' alt='flicker photo' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='images/3.png' alt='flicker photo' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='images/4.png' alt='flicker photo' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='images/5.png' alt='flicker photo' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='images/6.png' alt='flicker photo' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-lg-3 col-md-4 col-sm-12'>
                <div class='single-footer footer-four margin-0'>
                  <h3>Corporate Office</h3>
                  <nav>
                    <ul>
                      <li>
                        <i class='fa fa-paper-plane-o'></i> 44 New Design
                        Street, rne 00 USA
                      </li>
                      <li>
                        <i class='fa fa-phone'></i>{' '}
                        <a href='tel:+985-2356-14566'>+985-2356-14566</a>
                      </li>
                      <li>
                        <i class='fa fa-envelope-o'></i>{' '}
                        <a href='mailto:yourmail@gmail.com'>
                          yourmail@gmail.com
                        </a>
                      </li>
                      <li>
                        <i class='fa fa-fax'></i> Fax: (123) 4589761
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BeforeFooterWrapper>
  );
};

const BeforeFooterWrapper = styled.section`
  background: #1c1c1c;
  background-size: cover;
  background-position: center center;
  padding: 80px 0;
`;

export default BeforeFooter;
