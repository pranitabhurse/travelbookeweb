import React from 'react';
import { Typography, Layout } from 'antd';

import profile1 from '../../../assets/img/Group 8121.png';
import profile2 from '../../../assets/img/Group 8122.png';
import profile6 from '../../../assets/img/Mask Group 86.png';
import next from '../../../assets/img/next.png';
import profile7 from '../../../assets/img/Mask Group 87.png';
import profile8 from '../../../assets/img/Mask Group 89.png';
import { Carousel } from 'antd';
import Slider from '@ant-design/react-slick';
const { Title } = Typography;
const { Content } = Layout;

const Trendinglive = () => {
  let profileBox = {
    marginRight: '20px',
  };
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  return (
    <div>
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
                <span style={{ color: 'black' }}>Explore Trending</span>
                <span style={{ color: 'red' }}> Lives</span>
              </Title>
              <h4 style={{ textAlign: 'center', color: 'black' }}>
                After a successful test in select countries, today we’re
                launching Reels ads to the world.Reels is the best place
                <br /> on Instagram to reach people who don’t follow you and a
                growing global stage where brands and <br /> creators can be
                discovered by anyone.
              </h4>
              <br />
              <br />

              <div className='myReels' style={{display:"flex"}}>
            
                <div className='profileBox' style={profileBox}>
                  <img src={profile6} alt='' />
                  <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>
                      <b>Marshmello</b>
                    </h1>
                    <h3
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        margin: '10px',
                      }}
                    >
                      Moni_4329
                    </h3>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={profile1} alt='' />
                  <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>
                      <b>Marshmello</b>
                    </h1>
                    <h3
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        margin: '10px',
                      }}
                    >
                      Moni_4329
                    </h3>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={profile2} alt='' />
                  <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>
                      <b>Marshmello</b>
                    </h1>
                    <h3
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        margin: '10px',
                      }}
                    >
                      Moni_4329
                    </h3>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={profile1} alt='' />
                  <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>
                      <b>Marshmello</b>
                    </h1>
                    <h3
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        margin: '10px',
                      }}
                    >
                      Moni_4329
                    </h3>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={profile8} alt='' />
                  <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>
                      <b>Marshmello</b>
                    </h1>
                    <h3
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        margin: '10px',
                      }}
                    >
                      Moni_4329
                    </h3>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={profile7} alt='' />
                  <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>
                      <b>Marshmello</b>
                    </h1>
                    <h3
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        margin: '10px',
                      }}
                    >
                      Moni_4329
                    </h3>
                  </div>
                 
                </div> 
              </div>
             
            </div>
            
          </div>
          <div style={{ float: 'right', marginRight: '100px' }}>
          <img src={next} width='50px' alt='' />
          </div>
        </Content>
      </Layout>
      ,
    </div>
  );
};

export default Trendinglive;
