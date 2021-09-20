import React from 'react';
import { Row, Col, Button, Typography, Layout } from 'antd';

import mobile from '../../../assets/img/Group 8127.png';
import mobileapp from '../../../assets/img/Group 8128.png';

const { Title } = Typography;
const { Content } = Layout;

const MobileApp = () => {
  let topButton = {
    background: '#4aaff7',
    color: '#fff',
    height: '50px',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '30px 10px 10px 0px',
    width: '150px',

    borderRadius: '10px',
    fontSize: '25px',
  };

  return (
    <div className='bg-img'>
      <div>
        <Layout>
          <Content
            className='bg-img'
            style={{ padding: '0', marginTop: '11rem' }}
          >
            <div>
              <Row style={{ marginTop: '50px' }}>
                <Col span={12} style={{ textAlign: 'center' }}>
                  <div>
                    <div>
                      <Title style={{ color: 'black' }} level={1}>
                        Download Our Mobile App
                      </Title>
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: '140px' }}>
                      <h1 style={{ color: 'black' , marginLeft:"10px" }}>
                        Lorem ipsum dolor sit amet, consetetur
                        <br />
                        sadipscing
                        <br />
                        elitr, sed diam nonumy eirmod tempor
                        <br />
                        invidunt ut labore.
                      </h1>
                      <Button style={topButton} type='primary'>
                        Download
                      </Button>
                    </div>
                  </div>
                </Col>
                <Row>
                  <Col>
                    <div>
                      <img src={mobileapp} alt='' />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <img src={mobile} alt='' />
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default MobileApp;
