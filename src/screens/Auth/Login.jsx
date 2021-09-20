import React from 'react';
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Auth.scss';

import googleImg from '../../assets/img/fb.png';
import facebookImg from '../../assets/img/google.png';
import authBanner from '../../assets/images/logo.PNG';
export const Login = () => {
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
              className='container'
              style={{ width: '100%', marginTop: '20px', marginLeft: '20px' }}
            >
              <Form
                name='basic'
                labelCol={{ span: '2rem' }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
              >
                <Form.Item>
                  <b>Sign In To Your Account To Continue</b>
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your UserName!' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    placeholder='Enter Your UserName'
                  />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Password!' },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    placeholder='Password'
                  />
                </Form.Item>

                <Form.Item name='remember' valuePropName='checked'>
                  <Checkbox>Remember Me</Checkbox>
                  <Button type='link'>Forget Password</Button>
                </Form.Item>

                <Form.Item>
                  <Link to="/contact-us"><Button type='primary' block>
                    Login
                  </Button></Link>
                </Form.Item>

                <Form.Item>
                  <b>Or</b>
                </Form.Item>

                <Form.Item>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '-20px',
                    }}
                  >
                    <span
                      style={{
                        padding: '5px 50px',
                        marginRight: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={googleImg}
                        width='30'
                        height='30'
                        alt='Google Login'
                      />
                    </span>

                    <span
                      style={{
                        padding: '5px 50px',
                        marginRight: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={facebookImg}
                        width='30'
                        height='30'
                        alt='Facebook Login'
                      />
                    </span>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Login;
