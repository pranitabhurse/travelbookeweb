import React from 'react';
import { Row, Col, Image } from 'antd';
import {
  PlayCircleFilled,
  VerticalAlignBottomOutlined,
  SoundFilled,
} from '@ant-design/icons';

import img from '../../../assets/images/vedio1.mp4';
import img2 from '../../../assets/images/vedio2.mp4';

const Courses = () => {
  return (
    <>
    <div>
      <Row className='main-container'>
        <Col className='left-col' lg={12}>
          <div className='container'>
            <div className='inner-container'>
              <h1 className='heading1' style={{color: "black"}}>
                The Shegao Gajanan Maharaj Mandir: 
                
              </h1>
              <p className='para'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
                purpose of lorem ipsum is to
              </p>

              
            </div>
          </div>
        </Col>
        <Col className='right-col' lg={12}>
          <div className='container'>
            <iframe src={img} className="video-img" width="400px" />
          
          </div>
         
        </Col>
       
      </Row>
      <Row className='main-container' style={{
        marginTop:"-300px"
      }}>
        <Col className='left-col' lg={12}>
          <div className='container'>
            <div className='inner-container'>
              <h1 className='heading1' style={{color: "black"}}>
                The Shiradi Shri Sainath Maharaj Mandir: 
                
              </h1>
              <p className='para'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
                purpose of lorem ipsum is to
              </p>

              
            </div>
          </div>
        </Col>
        <Col className='right-col' lg={12}>
          <div className='container'>
            <iframe src={img2} className="video-img" width="400px" />
          
          </div>
         
        </Col>
       
      </Row>
      </div>
    </>
  );
};

export default Courses;
