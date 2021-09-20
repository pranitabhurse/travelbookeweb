import React from 'react';
import { Row, Col, Button, Typography, Layout } from 'antd';

import profile from '../../../assets/img/Group 8124.png';
import profileMul from '../../../assets/img/Group 8126.png';

const { Title } = Typography;
const { Content } = Layout;

const Succes = () => {
  let img = {
    margin: '20px 20px 20px 20px',
  };
  let topButton = {
    background: '#4aaff7',
    color: '#fff',
    height: '50px',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '30px 10px 10px 200px',
    width: '150px',

    borderRadius: '10px',
    fontSize: '25px',
  };

  return (
    <div>
      <Layout>
        <Content
          className='site-layout'
          style={{ padding: '0', marginTop: '5rem' }}
        >
          <Title style={{ textAlign: 'center', color: 'black' }} level={1}>
            Success Story
          </Title>
          <Row style={{ marginTop: '50px' }}>
            <Col span={12} style={{ textAlign: 'center' }}>
              <div>
                <img src={profile} style={img} alt='' />
                <div style={{ textAlign: 'left', marginLeft: '80px' }}>
                  <Title style={{ color: 'black' }} level={2}>
                    Brokkly Simons
                  </Title>
                  <h1 style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr.
                  </h1>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <Row>
                <Col>
                  <img src={profileMul} style={img} alt='' />
                </Col>
                <Col>
                  <div>
                    <Title
                      style={{ color: 'black', margin: '10px 0px 0px 0px' }}
                      level={2}
                    >
                      Maxx Jhon
                    </Title>
                  </div>
                  <div>
                    <h1 style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet, consetetur
                      <br /> sadipscing elitr, sed diam nonumy eirmod t<br />
                      empor
                    </h1>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <img src={profileMul} style={img} alt='' />
                </Col>
                <Col>
                  <div>
                    <Title
                      style={{ color: 'black', margin: '10px 0px 0px 0px' }}
                      level={2}
                    >
                      Maxx Jhon
                    </Title>
                  </div>
                  <div>
                    <h1 style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      <br /> sed diam nonumy eirmod t<br />
                      empor
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={profileMul} style={img} alt='' />
                </Col>
                <Col>
                  <div>
                    <Title
                      style={{ color: 'black', margin: '10px 0px 0px 0px' }}
                      level={2}
                    >
                      Maxx Jhon
                    </Title>
                  </div>
                  <div>
                    <h1 style={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet, consetetur
                      <br /> sadipscing elitr, sed diam nonumy eirmod t<br />
                      empor
                    </h1>
                  </div>
                </Col>
              </Row>
              <Button style={topButton} type='primary'>
                View More
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Succes;
