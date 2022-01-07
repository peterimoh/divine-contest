import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Winners = () => {
  let { contestList } = useSelector((state) => state.contest);
  const { loading, contestants, error } = useSelector(
    (state) => state.fetchContestants
  );

  console.log(contestants);
  console.log('contest ====', contestList);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <React.Fragment>
      {/* {contestList && contestList.length !== 0 ? (
        <Winnerwrapper>
          <div id='winners' className='container mt-5  mb-5 md-5'>
            <div className='winner_title '>
              <h2 className='title text-center'>
                Latest <em>Winners</em>
              </h2>
            </div>
            <div className='winner_list'>
              <Carousel
                swipeable={false}
                autoPlay
                draggable={false}
                showDots={!true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition='all .5'
                transitionDuration={500}
                containerClass='carousel-container'
                removeArrowOnDeviceType={['mobile']}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
              >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Carousel>
            </div>
          </div>
        </Winnerwrapper>
      ) : null} */}

      {contestList && contestList.length !== 0 && contestList.map(ele => {
        console.log(ele)
        const { id, title, end_time } = ele
        
        const expiry = new Date(end_time.slice(0, 10));
        console.log(expiry)
        return(<p>hello world</p>)
      })}
    </React.Fragment>
  );
};

const Winnerwrapper = styled.div`
  #winners .title {
    font-weight: bold;
    color: #000;
  }

  #winners .title em {
    color: #c70a90;
    font-style: normal;
  }
`;
