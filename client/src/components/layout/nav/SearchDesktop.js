import React from 'react'

const SearchDesktop = () => {
    return (
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        style={{ zIndex: '0 !important' }}
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                <b>Vote for your favourite contestant</b>
              </h5>
            </div>
            <div class='modal-body'>
              <div className='search_form'>
                <p className=''>
                  <strong>Enter Contestant Number</strong>
                </p>
                {searchError && (
                  <div>
                    <small className='text-danger'>
                      <b>{searchError.msg.error}</b>
                    </small>
                  </div>
                )}
                <form className='' onSubmit={handleSearch}>
                  <input
                    type='number'
                    name='search'
                    placeholder='E.g: 257457'
                    className='form-control mb-3'
                    onChange={(e) => setUuid(e.target.value)}
                  />
                  <button
                    type='submit'
                    class='btn btn-primary btn-override w-100'
                  >
                    {searchLoading ? (
                      <div class='d-flex justify-content-center'>
                        <div class='spinner-border' role='status'>
                          <span class='sr-only'></span>
                        </div>
                      </div>
                    ) : (
                      'Search'
                    )}
                  </button>
                </form>

                {searchLoading && (
                  <div className='container mt-3 mb-3'>
                    <div>
                      <center>
                        <div class='spinner-grow text-success' role='status'>
                          <span class='sr-only'></span>
                        </div>
                      </center>
                    </div>
                  </div>
                )}
                <div className='container mt-3 mb-3'>
                  {searchResult.msg && searchResult.msg.length !== 0
                    ? searchResult.msg.map((x) => {
                        const {
                          id,
                          last_name,
                          first_name,
                          contest_pic,
                          title,
                          user_id,
                          contest_id,
                        } = x;
                        console.log(x);
                        return (
                          <div className='search_result'>
                            <img
                              src={`data:image/*;base64,${contest_pic}`}
                              className='img-fluid'
                              height='100'
                              width='100'
                              alt='contestant'
                            />
                            <div className='detail_block'>
                              <summary
                                style={{
                                  textTransform: 'capitalize',
                                  fontWeight: '600',
                                }}
                              >
                                {title}
                              </summary>
                              <p>
                                <i>
                                  {first_name} {last_name}
                                </i>
                              </p>
                            </div>
                            <a
                              href={
                                voteLinkBaseURL +
                                `/?${user_id}pZPY$${contest_id}hDZP`
                              }
                              className='btn btn-primary btn-override'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              vote
                            </a>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchDesktop
