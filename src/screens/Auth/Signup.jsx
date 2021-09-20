import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import './Auth.scss';

import authBanner from '../../assets/images/logo.PNG';

export const SignUp = () => {
  return (
    <Row
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Col
        id='col1'
        span={8}
        className='authillusCon'
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='imgBox'>
          <img src={authBanner} style={{ marginTop: '20px' }} alt='Banner' />
        </div>
      </Col>

      <Col
        id='col2'
        span={12}
        shadow
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px',
            }}
          >
            <div className='topBtnCon'>
              <Link to='/login'>
                <Button className='button'>Log in</Button>
              </Link>
              <Link to='/signup'>
                <Button className='button'>Sign Up</Button>
              </Link>
            </div>
          </div>

          <div className='mainContainer'>
            <div
              style={{ width: '100%', marginTop: '20px', marginLeft: '20px' }}
            >
              <Form
                name='basic'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
              >
                <Form.Item>
                  <b>
                    Create a profile, follow our TourTravels, make your Tour
                    is Happy
                  </b>
                </Form.Item>
                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your FirstName!' },
                  ]}
                >
                  <Input placeholder='Enter Your First Name' />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your LastName!' },
                  ]}
                >
                  <Input placeholder='Enter Your Last Name' />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Mobile!' },
                  ]}
                >
                  <Input placeholder='Enter Your mobile no' />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Email!' },
                  ]}
                >
                  <Input placeholder='Enter Your email.' />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Password!' },
                  ]}
                >
                  <Input type='password' placeholder='Password' />
                </Form.Item>
                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Password!' },
                  ]}
                >
                  <Input type='password' placeholder='confirm password' />
                </Form.Item>
                
                <Form.Item>
                 <Link to="/login"> <Button type='primary' block>
                    SignUp
                  </Button></Link>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default SignUp;
