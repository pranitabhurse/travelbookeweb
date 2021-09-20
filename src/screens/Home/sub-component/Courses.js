import React from 'react';
import { Layout, Button, Typography } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';

import python from '../../../assets/img/Image 136.png';
import java from '../../../assets/img/Mask Group 90.png';
import react from '../../../assets/img/Mask Group 91.png';
import javascript from '../../../assets/img/Mask Group 92.png';
import review from '../../../assets/img/review.jpg';
import next from '../../../assets/img/next.png';

const Courses = () => {
  const { Title } = Typography;
  const { Content } = Layout;

  let profileBox = {
    marginRight: '20px',
    border: '1px solid black',
    width: '368px',
    textAlign: 'center',
    marginTop: '80px',
  };

  return (
    <Layout className='layout'>
      <Content className='site-layout' style={{ padding: '0' }}>
        <div
          className='site-layout-background'
          style={{
            padding: '50px',
            minHeight: 380,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'White',
          }}
        >
          <div style={{ marginRight: '50px' }}>
            <Title style={{ textAlign: 'center' }} level={1}>
              <span style={{ color: 'black' }}>Our</span>
              <span style={{ color: '#4aaff7' }}>Courses</span>
            </Title>
            <h4 style={{ textAlign: 'center', color: 'black' }}>
              After a successful test in select countries, today we’re launching
              Reels ads to the world.Reels is the best place
              <br /> on Instagram to reach people who don’t follow you and a
              growing global stage where brands and <br /> creators can be
              discovered by anyone.
            </h4>
            <br />
            <br />
            <div className='myReels'style={{display:"flex"}}>
              <div className='profileBox' style={profileBox}>
                <img src={python} alt='python' />
                <div>
                  <Button type='primary' block>
                    Python
                  </Button>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                  <h5 style={{ color: 'black' }}>
                    <b>
                      100 Days of code - The Complete Python
                      <br />
                      Pro Bootcamp For 2021
                    </b>
                  </h5>
                  <div class='dr-angela-yu-OnA5oD poppins-normal-star-dust-11px'>
                    Dr. Angela Yu
                  </div>
                  <ShareAltOutlined
                    style={{ float: 'right', paddingRight: '20px' }}
                  />
                  <h5 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr
                  </h5>

                  <div>
                    <span>4.5</span> <img src={review} width='100px' alt='' />
                  </div>

                  <h2
                    style={{
                      float: 'right',
                      paddingRight: '20px',
                      color: 'black',
                    }}
                  >
                    <b>₹386</b>
                  </h2>
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '40px',
                    marginBottom: '10px',
                  }}
                  type='primary'
                >
                  Enrlo now
                </Button>
              </div>

              <div className='profileBox' style={profileBox}>
                <img src={java} alt='' />
                <div>
                  <Button type='primary' block>
                    Python
                  </Button>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                  <h5 style={{ color: 'black' }}>
                    <b>
                      100 Days of code - The Complete Python
                      <br />
                      Pro Bootcamp For 2021
                    </b>
                  </h5>
                  <div class='dr-angela-yu-OnA5oD poppins-normal-star-dust-11px'>
                    Dr. Angela Yu
                  </div>
                  <ShareAltOutlined
                    style={{ float: 'right', paddingRight: '20px' }}
                  />
                  <h5 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr
                  </h5>

                  <div>
                    <span>4.5</span> <img src={review} width='100px' alt='' />
                  </div>

                  <h2
                    style={{
                      float: 'right',
                      paddingRight: '20px',
                      color: 'black',
                    }}
                  >
                    <b>₹386</b>
                  </h2>
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '40px',
                    marginBottom: '10px',
                  }}
                  type='primary'
                >
                  Enrlo now
                </Button>
              </div>

              <div className='profileBox' style={profileBox}>
                <img src={react} alt='' />
                <div>
                  <Button type='primary' block>
                    Python
                  </Button>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                  <h5 style={{ color: 'black' }}>
                    <b>
                      100 Days of code - The Complete Python
                      <br />
                      Pro Bootcamp For 2021
                    </b>
                  </h5>
                  <div class='dr-angela-yu-OnA5oD poppins-normal-star-dust-11px'>
                    Dr. Angela Yu
                  </div>
                  <ShareAltOutlined
                    style={{ float: 'right', paddingRight: '20px' }}
                  />
                  <h5 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr
                  </h5>

                  <div>
                    <span>4.5</span> <img src={review} width='100px' alt='' />
                  </div>

                  <h2
                    style={{
                      float: 'right',
                      paddingRight: '20px',
                      color: 'black',
                    }}
                  >
                    <b>₹386</b>
                  </h2>
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '40px',
                    marginBottom: '10px',
                  }}
                  type='primary'
                >
                  Enrlo now
                </Button>
              </div>
            </div>
            <div className='myReels' style={{display:"flex"}}>
              <div className='profileBox' style={profileBox}>
                <img src={javascript} alt='' />
                <div>
                  <Button type='primary' block>
                    Python
                  </Button>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                  <h5 style={{ color: 'black' }}>
                    <b>
                      100 Days of code - The Complete Python
                      <br />
                      Pro Bootcamp For 2021
                    </b>
                  </h5>
                  <div class='dr-angela-yu-OnA5oD poppins-normal-star-dust-11px'>
                    Dr. Angela Yu
                  </div>
                  <ShareAltOutlined
                    style={{ float: 'right', paddingRight: '20px' }}
                  />
                  <h5 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr
                  </h5>

                  <div>
                    <span>4.5</span> <img src={review} width='100px' alt='' />
                  </div>

                  <h2
                    style={{
                      float: 'right',
                      paddingRight: '20px',
                      color: 'black',
                    }}
                  >
                    <b>₹386</b>
                  </h2>
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '40px',
                    marginBottom: '10px',
                  }}
                  type='primary'
                >
                  Enrlo now
                </Button>
              </div>

              <div className='profileBox' style={profileBox}>
                <img src={javascript} alt='' />
                <div>
                  <Button type='primary' block>
                    Python
                  </Button>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                  <h5 style={{ color: 'black' }}>
                    <b>
                      100 Days of code - The Complete Python
                      <br />
                      Pro Bootcamp For 2021
                    </b>
                  </h5>
                  <div class='dr-angela-yu-OnA5oD poppins-normal-star-dust-11px'>
                    Dr. Angela Yu
                  </div>
                  <ShareAltOutlined
                    style={{ float: 'right', paddingRight: '20px' }}
                  />
                  <h5 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr
                  </h5>

                  <div>
                    <span>4.5</span> <img src={review} width='100px' alt='' />
                  </div>

                  <h2
                    style={{
                      float: 'right',
                      paddingRight: '20px',
                      color: 'black',
                    }}
                  >
                    <b>₹386</b>
                  </h2>
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '40px',
                    marginBottom: '10px',
                  }}
                  type='primary'
                >
                  Enrlo now
                </Button>
              </div>

              <div className='profileBox' style={profileBox}>
                <img src={javascript} alt='' />
                <div>
                  <Button type='primary' block>
                    Python
                  </Button>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
                  <h5 style={{ color: 'black' }}>
                    <b>
                      100 Days of code - The Complete Python
                      <br />
                      Pro Bootcamp For 2021
                    </b>
                  </h5>
                  <div class='dr-angela-yu-OnA5oD poppins-normal-star-dust-11px'>
                    Dr. Angela Yu
                  </div>
                  <ShareAltOutlined
                    style={{ float: 'right', paddingRight: '20px' }}
                  />
                  <h5 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, <br />
                    consetetur sadipscing elitr
                  </h5>

                  <div>
                    <span>4.5</span> <img src={review} width='100px' alt='' />
                  </div>

                  <h2
                    style={{
                      float: 'right',
                      paddingRight: '20px',
                      color: 'black',
                    }}
                  >
                    <b>₹386</b>
                  </h2>
                </div>
                <br />
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '150px',
                    height: '40px',
                    marginBottom: '10px',
                  }}
                  type='primary'
                >
                  Enrlo now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ float: 'right', marginRight: '100px' }}>
          <img src={next} width='50px' alt='' />
        </div>
      </Content>
    </Layout>
  );
};

export default Courses;
