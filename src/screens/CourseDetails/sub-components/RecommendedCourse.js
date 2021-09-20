import React from 'react';
import { Row, Col, Image, Button } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';

import img4 from '../../../assets/img/GroupFour.png';
import shopingCard from '../../../assets/img/shoping.png';
import minihalfstar from '../../../assets/img/ministarhalf.png';
import mdstar from '../../../assets/img/mdstar.png';

const RecommendedCourse = () => {
  return (
    <>
      <div className='recommend-course'>
        <div className='headTextBox'>
          <div
            className='TextBox'
            style={{ width: '50%', textAlign: 'center' }}
          >
            <h1 className='heading1' style={{color: "black"}}>
              Recommended <span className='time'>Courses</span>
            </h1>
            <p className='para'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
              purpose of lorem ipsum is to
            </p>
          </div>
        </div>
        <div className='courses-row-container'>
          <Row className='courses-row'>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>

            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='col-3'>
              <Image src={img4} />
              <Row className='course-name' style={{ position: 'relative' }}>
                <Col style={{ width: '70%' }}>
                  <h3
                    style={{
                      color: 'white',
                      padding: '10px 0 0 15px',
                      fontWeight: '300',
                      fontSize: '18px',
                    }}
                  >
                    Data Science
                  </h3>
                </Col>
                <Col style={{ width: '30%' }}>
                  <div className='shopingCard'>
                    <Image className='Card' src={shopingCard} />
                  </div>
                </Col>
              </Row>

              <div
                style={{
                  width: '100%',
                  border: '1px solid #80808059',
                  padding: '20px 10px',
                }}
              >
                <Row>
                  <Col style={{ width: '95%', padding: '0 10px' }}>
                    <h5 style={{ fontSize: '12px', fontWeight: '700', color: "black" }}>
                      100 Days of code - The Complete Python Pro Bootcamp For
                      2021
                    </h5>
                    <p style={{ fontSize: '11px', fontWeight: '400' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </Col>
                  <Col style={{ width: '5%' }}>
                    <ShareAltOutlined
                      style={{ fontSize: '20px', padding: '10px 0' }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: '0 10px' }}>
                  <Col style={{ width: '70%' }}>
                    <div style={{ color: '#E48109' }}>
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
                    </div>
                  </Col>
                  <Col style={{ width: '30%' }}>
                    <h1 style={{ fontSize: '22px', color: "black" }}>₹386</h1>
                  </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      backgroundColor: '#4aaff7',
                      color: 'white',
                      borderRadius: '20px',
                      padding: '0 25px',
                      fontWeight: '600',
                    }}
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default RecommendedCourse;
