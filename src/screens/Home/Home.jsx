import React from 'react';
import { Typography, Button, Layout } from 'antd';

import Headers from '../../components/Header';
import TrendingReels from './sub-component/TrendingReels';
import Trendinglive from './sub-component/Trendinglive';
import Courses from './sub-component/Courses';
import Logo from './sub-component/Logo';
import TrendingWeek from './sub-component/TrendingWeek';
import Succes from './sub-component/Succes';
import MobileApp from './sub-component/MobileApp';

import connect from '../../assets/images/photo goa-22.jfif';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

function Home() {
  return (
    <Layout>
      <Headers />
      <Content
        className='site-layout'
        style={{ padding: '0', marginTop: '9rem' }}
      >
        <div
          className='site-layout-background'
          style={{
            padding: '50px',
            maxHeight: 450,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ marginRight: '50px' }}>
            <Title level={1}>Let's Tour Together</Title>

            <h5>
              Platform to Work Together on Those so called obstacles <br />
              impediments hindrances and togather befriend them
            </h5>
            <br />
            <br />

            <div >
             <Link to="/booking/form"> <Button style={{ margin: '10px',width:"200px" , height:"50px" }} type='danger'>
                Get Booked
              </Button></Link>
              
            </div>
          </div>
          <div>
            <img className='imgBox' src={connect} width='500rem' alt='' style={{
              marginTop:"80px"
            }} />
          </div>
        </div>
      </Content>

      
      <TrendingWeek />
     
    </Layout>
  );
}

export default Home;
