import React from 'react';
import { Layout, Button, Typography } from 'antd';

import client from '../../../assets/img/logo.PNG';

const { Content } = Layout;
const { Title } = Typography;

const Logo = () => {
  let topButton = {
    background: '#4aaff7',
    color: '#fff',
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    width: '180px',
    margin: ' 60px 0px 0px 50px',
    borderRadius: '10px',
    fontSize: '25px',
  };

  return (
    <div>
      <Layout>
        <Content
          className='site-layout'
          style={{ padding: '0', marginTop: '9rem' }}
        >
          <div
            className='site-layout-background'
            style={{
              padding: '50px',
              minHeight: 450,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'White',
            }}
          >
            <div style={{ marginRight: '80px' }}>
              <img className='imgBox' src={client} width='500rem' alt='' />
            </div>
            <div>
              <Title style={{ color: 'black' }} level={1}>
                Why choose us?
              </Title>
              <br />
              <br />{' '}
              <Title style={{ color: 'black' }} level={3}>
                {' '}
                Lorem Ipsum is simply dummy
                <br /> text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been
                <br />
                the Industry's standard dummy
              </Title>
              <div >
                {' '}
                <Button style={topButton}>Know More</Button>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Logo;
