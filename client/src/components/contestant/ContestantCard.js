import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import paginate from '../../utils/Paginate';

export const ContestantCard = () => {
  const { loading, contestants, error } = useSelector(
    (state) => state.fetchContestants
  );

  const [contestantFilter, setContestantFilter] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (contestants.msg !== undefined) {
      function hasDuplicates(array) {
        const set = new Set();
        const result = [];
        array.forEach((a) => {
          if (!set.has(a.user_id)) {
            set.add(a.user_id);
            result.push(a);
          }
        });
        return setContestantFilter(paginate(result));
      }
      hasDuplicates(contestants.msg);
    }
  }, [contestants]);

  const onNextPage = () => {
    if (page < contestantFilter.length - 1) {
      setPage(page + 1);
    }
    return null;
  };

  const onPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
    return null;
  };

  const onPageChange = (page) => {
    setPage(page);
  };

  const handlePage = (index) => {
    console.log('handlepage index====', index);
    setPage(index);
  };

  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          {contestantFilter && contestantFilter.length > 0
            ? contestantFilter[page].map((x, index) => {
                const {
                  region,
                  uuid,
                  profile_pic,
                  full_pic,
                  first_name,
                  last_name,
                } = x;

                return (
                  <div class='col-lg-3 col-sm-6' key={index}>
                    <div class='card hovercard'>
                      <div
                        class='cardheader'
                        style={{
                          background: `url(${full_pic})`,
                        }}
                      ></div>
                      <div class='avatar'>
                        <img
                          alt={`${first_name} ${last_name}'s overview`}
                          src={profile_pic}
                        />
                      </div>
                      <div class='info'>
                        <div class='title'>
                          <p
                            style={{
                              textTransform: 'capitalize',
                              fontWeight: '600',
                            }}
                          >{`${first_name} ${last_name}`}</p>
                        </div>
                        <div class='desc'>{uuid}</div>
                        <div class='desc'>Region - {region}</div>
                        <div class='desc'></div>
                      </div>
                      <div class='bottom'></div>
                    </div>
                  </div>
                );
              })
            : !loading && (
                <div>
                  <center>
                    <p>
                      There are no contestants at the moment! Check Back soon
                    </p>
                  </center>
                </div>
              )}
          {loading && (
            <div className='container'>
              <div>
                <center>
                  <div class='spinner-grow text-success' role='status'>
                    <span class='sr-only'></span>
                  </div>
                </center>
              </div>
            </div>
          )}
        </div>
        {!loading && contestantFilter.length > 0 ? (
          <div className='btn-container'>
            <button className='btn prev-btn' onClick={onPreviousPage}>
              prev
            </button>
            {contestantFilter.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`btn active page-btn ${
                    index === page ? 'active-btn btn-secondary' : null
                  }`}
                  onClick={() => onPageChange(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className='btn next-btn' onClick={onNextPage}>
              next
            </button>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    padding-top: 20px;
    margin: 10px 0 20px 0;
    background-color: #fff !important;
    border-top-width: 0;
    border-bottom-width: 2px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .card .card-heading {
    padding: 0 20px;
    margin: 0;
  }

  .card .card-heading.simple {
    font-size: 20px;
    font-weight: 300;
    color: #777;
    border-bottom: 1px solid #e5e5e5;
  }

  .card .card-heading.image img {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 15px;
    vertical-align: top;
    border: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .card .card-heading.image .card-heading-header {
    display: inline-block;
    vertical-align: top;
  }

  .card .card-heading.image .card-heading-header h3 {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    color: #262626;
  }

  .card .card-heading.image .card-heading-header span {
    font-size: 12px;
    color: #999999;
  }

  .card .card-body {
    padding: 0 20px;
    margin-top: 20px;
  }

  .card .card-media {
    padding: 0 20px;
    margin: 0 -14px;
  }

  .card .card-media img {
    max-width: 100%;
    max-height: 100%;
  }

  .card .card-actions {
    min-height: 30px;
    padding: 0 20px 20px 20px;
    margin: 20px 0 0 0;
  }

  .card .card-comments {
    padding: 20px;
    margin: 0;
    background-color: #f8f8f8;
  }

  .card .card-comments .comments-collapse-toggle {
    padding: 0;
    margin: 0 20px 12px 20px;
  }

  .card .card-comments .comments-collapse-toggle a,
  .card .card-comments .comments-collapse-toggle span {
    padding-right: 5px;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-comments .media-heading {
    font-size: 13px;
    font-weight: bold;
  }

  .card.people {
    position: relative;
    display: inline-block;
    width: 170px;
    height: 300px;
    padding-top: 0;
    margin-left: 20px;
    overflow: hidden;
    vertical-align: top;
  }

  .card.people:first-child {
    margin-left: 0;
  }

  .card.people .card-top {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 170px;
    height: 150px;
    background-color: #ffffff;
  }

  .card.people .card-top.green {
    background-color: #53a93f;
  }

  .card.people .card-top.blue {
    background-color: #427fed;
  }

  .card.people .card-info {
    position: absolute;
    top: 150px;
    display: inline-block;
    width: 100%;
    height: 101px;
    overflow: hidden;
    background: #ffffff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .card.people .card-info .title {
    display: block;
    margin: 8px 14px 0 14px;
    overflow: hidden;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    color: #404040;
  }

  .card.people .card-info .desc {
    display: block;
    margin: 8px 14px 0 14px;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    color: #737373;
    text-overflow: ellipsis;
  }

  .card.people .card-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    padding: 10px 20px;
    line-height: 29px;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .card.hovercard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    background-color: rgba(214, 224, 226, 0.2);
  }

  .card.hovercard .cardheader {
    background-size: cover !important;
    height: 230px;
  }

  .card.hovercard .avatar {
    position: relative;
    top: -50px;
    margin-bottom: -50px;
  }

  .card.hovercard .avatar img {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid #8b3963;
  }

  .card.hovercard .info {
    padding: 4px 8px 10px;
  }

  .card.hovercard .info .title {
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 1;
    color: #262626;
    vertical-align: middle;
  }

  .card.hovercard .info .desc {
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    text-overflow: ellipsis;
  }

  .card.hovercard .bottom {
    padding: 0 20px;
    margin-bottom: 17px;
  }
`;
