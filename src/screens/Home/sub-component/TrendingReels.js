import React from 'react';
import { Typography, Layout } from 'antd';

import vediopic from '../../../assets/img/Photo 5.png';
import vediopic2 from '../../../assets/img/Photo 4.png';
import vediopic3 from '../../../assets/img/Group 8119.png';
import next from '../../../assets/img/next.png';

const { Content } = Layout;
const { Title } = Typography;

const TrendingReels = () => {
  let vedioStyle = {
    margin: '15px 15px 15px 15px',
  };
  return (
    <div>
      <Content className='site-layout' style={{ padding: '0' }}>
        <div
          className='site-layout-background'
          style={{
            padding: '50px',
            minHeight: 380,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightGrey',
          }}
        >
          <div style={{ marginRight: '50px' }}>
            <Title style={{ textAlign: 'center' }} level={1}>
              <span style={{ color: 'black' }}>Trending</span>{' '}
              <span style={{ color: '#4aaff7' }}> Places</span>{' '}
            </Title>
            <h4 style={{ textAlign: 'center', color: 'black' }}>
              After a successful test in select countries, today we’re launching
              Reels ads to the world.Reels is the best place
              <br /> on Instagram to reach people who don’t follow you and a
              growing global stage where brands and <br /> creators can be
              discovered by anyone.
            </h4>
            <br />
            <br />{' '}
            <div className='myReels'style={{display:"flex"}}>
              <div style={vedioStyle}>
                <img src={vediopic} alt='' />
              </div>
              <div style={vedioStyle}>
                <img src={vediopic2} alt='' />
              </div>
              <div style={vedioStyle}>
                <img src={vediopic3} alt='' />
              </div>
              <div style={vedioStyle}>
                <img src={vediopic} alt='' />
              </div>
              <div style={vedioStyle}>
                <img src={vediopic} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div style={{ float: 'right', marginRight: '100px' }}>
          <img src={next} width='50px' alt='' />
        </div>
      </Content>
    </div>
  );
};

export default TrendingReels;
