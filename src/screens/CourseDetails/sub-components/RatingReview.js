import React from 'react';
import { Row, Col, Button, Image } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

import minihalfstar from '../../../assets/img/ministarhalf.png';
import mdstar from '../../../assets/img/mdstar.png';

const RatingReview = () => {
  return (
    <>
      <div style={{ padding: '0 0 100px 0' }}>
        <div className='RatingReview-container'>
          <Row gutter={[16, 8]} className='RatingReview-row'>
            <Col className='RatingReview-col'>
              <div>
                <h1 style={{ margin: '0px', fontWeight: '700', color: "black" }}>
                  Rating & Reviews
                </h1>
                <span
                  style={{
                    color: '#E48109',
                    fontSize: '20px',
                    fontWeight: '600',
                    margin: '0 10px 0 0',
                  }}
                >
                  4.9
                </span>
                <span style={{ color: '#E48109', fontSize: '18px' }}>
                  <Image
                    style={{ width: '20px', padding: '2px 0 0 0' }}
                    src={mdstar}
                  />
                  <Image
                    style={{ width: '20px', padding: '2px 0 0 0' }}
                    src={mdstar}
                  />
                  <Image
                    style={{ width: '20px', padding: '2px 0 0 0' }}
                    src={mdstar}
                  />
                  <Image
                    style={{ width: '20px', padding: '2px 0 0 0' }}
                    src={mdstar}
                  />
                  <Image
                    style={{ width: '20px', padding: '2px 0 0 0' }}
                    src={minihalfstar}
                  />
                </span>
                <p style={{ fontWeight: '400', margin: '10px 0' }}>
                  414 Ratings & 263 Reviews
                </p>
              </div>
              <div className='progressBar' style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '20px', color: "black" }}>
                    5
                    <StarFilled
                      style={{
                        fontWeight: '600',
                        fontSize: '15px',
                        color: '#CCCCCC',
                        padding: '0 0 0 15px',
                      }}
                    ></StarFilled>
                  </h4>
                </div>
                <div className='prog-div'>
                  <div className='ProgressRating'>
                    <div className='progRating'></div>
                  </div>
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '20px',
                      padding: '0 0 0 5px',
                    }}
                  >
                    {' '}
                    62%
                  </div>
                </div>
              </div>
              <div className='progressBar' style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '20px', color: "black" }}>
                    4
                    <StarFilled
                      style={{
                        fontWeight: '600',
                        fontSize: '15px',
                        color: '#CCCCCC',
                        padding: '0 0 0 15px',
                      }}
                    ></StarFilled>
                  </h4>
                </div>
                <div className='prog-div'>
                  <div className='ProgressRating'>
                    <div className='progRating' style={{ width: '75%' }}></div>
                  </div>
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '20px',
                      padding: '0 0 0 5px',
                    }}
                  >
                    {' '}
                    22%
                  </div>
                </div>
              </div>
              <div className='progressBar' style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '20px', color: "black" }}>
                    3
                    <StarFilled
                      style={{
                        fontWeight: '600',
                        fontSize: '15px',
                        color: '#CCCCCC',
                        padding: '0 0 0 15px',
                      }}
                    ></StarFilled>
                  </h4>
                </div>
                <div className='prog-div'>
                  <div className='ProgressRating'>
                    <div
                      className='progRating'
                      style={{
                        width: '50%',
                        backgroundColor: '#E48109',
                        border: '1px solid #E48109',
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '20px',
                      padding: '0 0 0 5px',
                    }}
                  >
                    {' '}
                    10%
                  </div>
                </div>
              </div>
              <div className='progressBar' style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '20px', color: "black" }}>
                    2
                    <StarFilled
                      style={{
                        fontWeight: '600',
                        fontSize: '15px',
                        color: '#CCCCCC',
                        padding: '0 0 0 15px',
                      }}
                    ></StarFilled>
                  </h4>
                </div>
                <div className='prog-div'>
                  <div className='ProgressRating'>
                    <div
                      className='progRating'
                      style={{
                        width: '35%',
                        backgroundColor: '#F1B510',
                        border: '1px solid #F1B510',
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '20px',
                      padding: '0 0 0 15px',
                    }}
                  >
                    {' '}
                    4%
                  </div>
                </div>
              </div>
              <div className='progressBar' style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '20px', color: "black" }}>
                    1
                    <StarFilled
                      style={{
                        fontWeight: '600',
                        fontSize: '15px',
                        color: '#CCCCCC',
                        padding: '0 0 0 15px',
                      }}
                    ></StarFilled>
                  </h4>
                </div>
                <div className='prog-div'>
                  <div className='ProgressRating'>
                    <div
                      className='progRating'
                      style={{
                        width: '15%',
                        backgroundColor: 'red',
                        border: '1px solid red',
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '20px',
                      padding: '0 0 0 15px',
                    }}
                  >
                    {' '}
                    2%
                  </div>
                </div>
              </div>
            </Col>
            <Col className='RatingReview-right-col'>
              <div className='col-div'>
                <h1 style={{ margin: '0px', fontWeight: '700', color: "black" }}>
                  Rate this Course
                </h1>
                <div style={{ margin: '0 0 15px 0' }}>
                  <StarOutlined
                    style={{
                      margin: '5px 8px 0 0',
                      fontSize: '18px',
                      color: '#4a4a4a73',
                    }}
                  ></StarOutlined>
                  <StarOutlined
                    style={{
                      margin: '5px 8px 0 0',
                      fontSize: '18px',
                      color: '#4a4a4a73',
                    }}
                  ></StarOutlined>
                  <StarOutlined
                    style={{
                      margin: '5px 8px 0 0',
                      fontSize: '18px',
                      color: '#4a4a4a73',
                    }}
                  ></StarOutlined>
                  <StarOutlined
                    style={{
                      margin: '5px 8px 0 0',
                      fontSize: '18px',
                      color: '#4a4a4a73',
                    }}
                  ></StarOutlined>
                  <StarOutlined
                    style={{
                      margin: '5px 8px 0 0',
                      fontSize: '18px',
                      color: '#4a4a4a73',
                    }}
                  ></StarOutlined>
                </div>
                <h1 style={{ margin: '0px', fontWeight: '700', color: "black" }}>
                  Review this Course
                </h1>
                <p style={{ fontWeight: '500', padding: '5px 0 0 0' }}>
                  Share your thoughts with other customers
                </p>
                <div className='message-box'>
                  <p>Write Review here</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='review'>
          <Row className='review-row'>
            <Col>
              <div style={{ padding: '30px 0 0 0' }}>
                <h1 style={{ fontWeight: '700', color: "black" }}>Navin Kumar K</h1>
                <div className='rating-point'>
                  <div>
                    <span
                      style={{
                        padding: '5px 15px',
                        borderRadius: '5px',
                        backgroundColor: '#4aaff7',
                        color: '#fff',
                        fontSize: '18px',
                      }}
                    >
                      5 <StarFilled />
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        padding: '0 10px',
                        color: '#4a4a4a73',
                      }}
                    >
                      Verified Buyer
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: '400' }}>
                      18 August 2020
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: '400' }}>
                    Being a user of WOW’s Omega 3 capsules for the last couple
                    of months, today, I have so much relief in work-related
                    depression. I have found that I am able to focus better and
                    there is definitely a reduction in mental fatigue b
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: '30px 0 0 0',
                  borderTop: '1px solid rgba(172, 172, 172, 0.726)',
                }}
              >
                <h1 style={{ fontWeight: '700', color: "black" }}>Navin Kumar K</h1>
                <div className='rating-point'>
                  <div>
                    <span
                      style={{
                        padding: '5px 15px',
                        borderRadius: '5px',
                        backgroundColor: '#4aaff7',
                        color: '#fff',
                        fontSize: '18px',
                      }}
                    >
                      5 <StarFilled />
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        padding: '0 10px',
                        color: '#4a4a4a73',
                      }}
                    >
                      Verified Buyer
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: '400' }}>
                      18 August 2020
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: '400' }}>
                    Being a user of WOW’s Omega 3 capsules for the last couple
                    of months, today, I have so much relief in work-related
                    depression. I have found that I am able to focus better and
                    there is definitely a reduction in mental fatigue b
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: '30px 0 0 0',
                  borderTop: '1px solid rgba(172, 172, 172, 0.726)',
                }}
              >
                <h1 style={{ fontWeight: '700', color: "black" }}>Navin Kumar K</h1>
                <div className='rating-point'>
                  <div>
                    <span
                      style={{
                        padding: '5px 15px',
                        borderRadius: '5px',
                        backgroundColor: '#4aaff7',
                        color: '#fff',
                        fontSize: '18px',
                      }}
                    >
                      5 <StarFilled />
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        padding: '0 10px',
                        color: '#4a4a4a73',
                      }}
                    >
                      Verified Buyer
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: '400' }}>
                      18 August 2020
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: '400' }}>
                    Being a user of WOW’s Omega 3 capsules for the last couple
                    of months, today, I have so much relief in work-related
                    depression. I have found that I am able to focus better and
                    there is definitely a reduction in mental fatigue b
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='review-div'>
          <div className='review-btn'>
            <Button>View More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingReview;
