import React from 'react';
import { Row, Col, Button, Image } from 'antd';
import {
  PlayCircleFilled,
  VerticalAlignBottomOutlined,
  SoundFilled,
} from '@ant-design/icons';

import img1 from '../../../assets/img/GroupOne.png';
import img2 from '../../../assets/img/GroupTwo.png';
import img3 from '../../../assets/img/GroupThree.png';
import subtitles from '../../../assets/img/subtitles.png';
import update from '../../../assets/img/update.png';
import earth from '../../../assets/img/earth.png';

const Episodes = () => {
  return (
    <>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Row center='xs' className='main-episode'>
          <Col className='inner-episode'>
            <Row center='xs' className='Latest-Podcast-Episode'>
              <Col className='Podcast-Episode'>
                <h1 className='heading1' style={{color: "black"}}>Latest Podcast Episode</h1>
              </Col>
              <Col className='Podcast-Episode-btn'>
                <Button type='primary'>View All</Button>
              </Col>
            </Row>

            <Row className='lactures' style={{ padding: '10px 30px' }}>
              <Col
                className='left-lactures-col'
                style={{ marginRight: '10px' }}
              >
                <Image className='img' src={img1} />
              </Col>
              <Col className='right-lactures-col'>
                <Row className='right-lactures-col-row'>
                  <Col className='right-lactures-col-row-left-col'>
                    <div>
                      <h2 className='heading2' style={{color: "black"}}>introduction</h2>
                      <p className='para'>
                        “Lorem ipsum bore et dolore magna aliqua.” The purpose
                        of lorem ipsum is to Lorem ipsum bore et dolore magna
                        aliqua.” The
                      </p>
                      <div className='progress-bar'>
                        <div>
                          <PlayCircleFilled
                            style={{ fontSize: '30px', color: '#4aaff7' }}
                          ></PlayCircleFilled>
                        </div>
                        <span className='time'>26:00</span>
                        <div className='Progress'>
                          <div className='prog'></div>
                        </div>
                        <span className='time'>43:25</span>
                        <div>
                          <SoundFilled
                            style={{
                              fontSize: '22px',
                              fontWeight: '800',
                              margin: '4px 5px',
                            }}
                          ></SoundFilled>
                        </div>
                        <div>
                          <VerticalAlignBottomOutlined
                            style={{
                              fontSize: '22px',
                              fontWeight: '800',
                              margin: '4px 5px',
                            }}
                          ></VerticalAlignBottomOutlined>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className='right-lactures-col-row-right-col'>
                    <div style={{ padding: '10px' }}>
                      <p>
                        <Image style={{ width: '15px' }} src={update} />{' '}
                        <span>Last Updated 5/2021</span>
                      </p>
                      <p>
                        <Image style={{ width: '15px' }} src={earth} />{' '}
                        <span>English</span>
                      </p>
                      <p>
                        <Image style={{ width: '15px' }} src={subtitles} />{' '}
                        <span>
                          English,Hindi, <span className='time'>2 more</span>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className='lactures' style={{ padding: '10px 30px' }}>
              <Col
                className='left-lactures-col'
                style={{ marginRight: '10px' }}
              >
                <Image className='img' src={img2} />
              </Col>
              <Col className='right-lactures-col'>
                <Row className='right-lactures-col-row'>
                  <Col className='right-lactures-col-row-left-col'>
                    <div>
                      <h2 className='heading2' style={{color: "black"}}>Basics of Python</h2>
                      <p className='para'>
                        “Lorem ipsum bore et dolore magna aliqua.” The purpose
                        of lorem ipsum is to Lorem ipsum bore et dolore magna
                        aliqua.” The
                      </p>
                      <div className='progress-bar'>
                        <div>
                          <PlayCircleFilled
                            style={{ fontSize: '30px', color: '#4aaff7' }}
                          ></PlayCircleFilled>
                        </div>
                        <span className='time'>26:00</span>
                        <div className='Progress'>
                          <div className='prog'></div>
                        </div>
                        <span className='time'>43:25</span>
                        <div>
                          <SoundFilled
                            style={{
                              fontSize: '22px',
                              fontWeight: '800',
                              margin: '4px 5px',
                            }}
                          ></SoundFilled>
                        </div>
                        <div>
                          <VerticalAlignBottomOutlined
                            style={{
                              fontSize: '22px',
                              fontWeight: '800',
                              margin: '4px 5px',
                            }}
                          ></VerticalAlignBottomOutlined>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className='right-lactures-col-row-right-col'>
                    <div style={{ padding: '10px' }}>
                      <p>
                        <Image style={{ width: '15px' }} src={update} />{' '}
                        <span>Last Updated 5/2021</span>
                      </p>
                      <p>
                        <Image style={{ width: '15px' }} src={earth} />{' '}
                        <span>English</span>
                      </p>
                      <p>
                        <Image style={{ width: '15px' }} src={subtitles} />{' '}
                        <span>
                          English,Hindi, <span className='time'>2 more</span>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className='lactures' style={{ padding: '10px 30px' }}>
              <Col
                className='left-lactures-col'
                style={{ marginRight: '10px' }}
              >
                <Image className='img' src={img3} />
              </Col>
              <Col className='right-lactures-col'>
                <Row className='right-lactures-col-row'>
                  <Col className='right-lactures-col-row-left-col'>
                    <div>
                      <h2 className='heading2' style={{color: "black"}}>Getting start with Python</h2>
                      <p className='para'>
                        “Lorem ipsum bore et dolore magna aliqua.” The purpose
                        of lorem ipsum is to Lorem ipsum bore et dolore magna
                        aliqua.” The
                      </p>
                      <div className='progress-bar'>
                        <div>
                          <PlayCircleFilled
                            style={{ fontSize: '30px', color: '#4aaff7' }}
                          ></PlayCircleFilled>
                        </div>
                        <span className='time'>26:00</span>
                        <div className='Progress'>
                          <div className='prog'></div>
                        </div>
                        <span className='time'>43:25</span>
                        <div>
                          <SoundFilled
                            style={{
                              fontSize: '22px',
                              fontWeight: '800',
                              margin: '4px 5px',
                            }}
                          ></SoundFilled>
                        </div>
                        <div>
                          <VerticalAlignBottomOutlined
                            style={{
                              fontSize: '22px',
                              fontWeight: '800',
                              margin: '4px 5px',
                            }}
                          ></VerticalAlignBottomOutlined>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className='right-lactures-col-row-right-col'>
                    <div style={{ padding: '10px' }}>
                      <p>
                        <Image style={{ width: '15px' }} src={update} />{' '}
                        <span>Last Updated 5/2021</span>
                      </p>
                      <p>
                        <Image style={{ width: '15px' }} src={earth} />{' '}
                        <span>English</span>
                      </p>
                      <p>
                        <Image style={{ width: '15px' }} src={subtitles} />{' '}
                        <span>
                          English,Hindi, <span className='time'>2 more</span>
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div
              style={{
                width: '100%',
                padding: '40px 0 35px 0',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div>
                <Button className='border-btn'>Show More Episode</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Episodes;
