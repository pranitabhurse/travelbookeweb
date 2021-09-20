import React from 'react';
import {
  DownOutlined,
  HeartOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Row ,Col } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import { Link } from 'react-router-dom';

const Category = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  return (
    <div>
      <div >
        <div style={{ border:"1px solid white",
            width:"100%",
            }}>
          <div style ={{
            marginTop:"9rem"}}>
          <div 
          style={{
            borderColor:"blue",
            backgroundColor: 'blue',
            textAlign:"center",
            height:"250px"

          }}>
            <h1 style={{
                float:"right",
                marginTop:"10px"
            }}><PhoneOutlined /><span>+91-9764-0298-63</span> <Link to="/login"> <UserOutlined /> <span> Login</span></Link></h1>
            <br/><br/> <br/><br/> <br/><br/>
       <p>
         
         <h1>LET'S CONNECT</h1>
         <h3>We'd Love to help your Start Travel with Us..</h3>
       </p>
        </div>
        <div style={{
            justifyContent:"center",
            textAlign:"center",
            margin:"50px 20px 20px 20px"

        }}>
            <Row >
                <Col sm={12}>
                <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label="Mobile_No"
        rules={[
          {
           
            
           
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item name={['user', 'introduction']} label="Experience">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Share Photos">
        <Input type="file" style={{border: "none"}}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" block htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
                </Col>
                <Col sm={12}>
                <div class="map">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120000.19847546612!2d79.2055004973679!3d19.966241410698565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d5d164adc333%3A0x440ae57d85f01b55!2sChandrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1597467668223!5m2!1sen!2sin" width="450" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>

</div>

                </Col>
            </Row>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
