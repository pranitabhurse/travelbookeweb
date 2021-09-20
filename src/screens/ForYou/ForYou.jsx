import React, { useState } from 'react'
import {  DatePicker, Row,Col, TimePicker } from 'antd';
import { Form, Input, InputNumber, Button , Select} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import thanku from '../../assets/images/thank.jpg'
import './ForYou.scss';
import Password from 'antd/lib/input/Password';
export const ForYou = () => {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
  
const [item, setItem] = useState([]);

const [user, setUser] = useState({
  fname: "",
  lname: "",
  email: "",  
  mobile: "",
  booking: "",
  people: "",
  desti:"",
password:"",
cpassword:"",
address:"",
current:"",
});

const { fname, lname, email, mobile, people , booking , desti , password , cpassword , current , address} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
const both=(()=>{
  onsubmit();
  Touch();
})
const onsubmit=()=>{
  if(!fname || !lname || !email || !mobile || !people || !booking || !desti  || password || cpassword || address || current){
    alert("required feild");

  }
  if (password==cpassword) {
    alert("type same password")
    
  }
  else{
    console.log("bjkbk",user)
    setItem([...item,user]);
   

  }
}
const [touch , setTouch]= useState();
 const Touch =()=>{
  if(!fname || !lname || !email || !mobile || !people || !booking || !desti  || password || cpassword || address || current){
    console.log("required feild");

  }
  if (password==cpassword) {
    console.log("type same password")
    
  }
  else{
    setTouch(!touch)
  }
 
 } 
      const { RangePicker } = DatePicker;
      const { Option } = Select;
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
           
          <Select style={{ width: 70 }} >
            <Option value="86">+91</Option>
            <Option value="90">+90</Option>
            <Option value="94">+94</Option>
            
+91
          </Select>
        </Form.Item>
      );
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
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgb(0,0,0,0.5)",

      }}
    >
     
      <div
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
         

          <div className='mainContainer'
          
           >
            <div
              style={{ 
                  width: '100%',
                   marginTop: '20px',
                   
                  
                }}
            >
             <Form
                name='basic'
               labelCol={{span:4}}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
               
              >
                <Form.Item 
                style={{width:"800px"}}>
                  <b>
                   <h1 style={{
                       color:"black"
                   }}>Travel Booking Form  </h1>
                  </b>
                </Form.Item>
                
                <Form.Item
                
                  rules={[
                    { required: true, message: 'Please Input Your FirstName!' },
                  ]}
                  label="First Name"
                >
                  <Input placeholder='Enter Your First Name' name="fname" value={fname} onChange={e => onInputChange(e)}  />
               
                  </Form.Item>
                  <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your LastName!' },
                  ]}
                  label="Last Name"
                >
                  <Input placeholder='Enter Your Last Name' name="lname" value={lname} onChange={e => onInputChange(e)} />
                
                </Form.Item>
                
               

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Mobile!' },
                  ]}
                  label="Mobile No"
                >
                  <Input type="number" addonBefore={prefixSelector} name="mobile" placeholder='Enter Your mobile no'value={mobile} onChange={e => onInputChange(e)} />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Email!' },
                  ]}
                  label="Email"
                >
                  <Input placeholder='Enter Your email.' name="email" value={email} onChange={e => onInputChange(e)} />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Password!' },
                  ]}
                  label="Password"
                >
                  <Input type='password' placeholder='Password' name="password" value={password} onChange={e => onInputChange(e)}  />
                </Form.Item>
                <Form.Item
                  rules={[
                    { required: true, message: 'Please Input Your Password!' },
                  ]}
                  label="Conform Password"
                >
                  <Input type='password' placeholder='confirm password' name="cpassword" value={cpassword} onChange={e => onInputChange(e)} />
                </Form.Item>
                <Form.Item  
                label="Address" >
        <Input  placeholder="enter your address"/>
      </Form.Item>
      <Form.Item  
                label="Source" >
        <Input placeholder="enter your source address" name="address" value={address} onChange={e => onInputChange(e)} />
      </Form.Item>
      <Form.Item  
                label="Destination" >
        <Input placeholder="enter your Destination address"name="desti" value={desti} onChange={e => onInputChange(e)}/>
       
      </Form.Item>
      <Form.Item  
                label="people" >
        <Input  type="number" placeholder="how many peoples" name="people" value={people} onChange={e => onInputChange(e)}/>
        <Option>hkih</Option>
      </Form.Item>
                <Form.Item  
                label="Current Date" >
        <Input type="date" placeholder="current" name="current" value={current} onChange={e => onInputChange(e)} />
      </Form.Item>
      <Form.Item  
                label="Booking Date" >
        <Input type="date" placeholder="booking"  name="booking" value={booking} onChange={e => onInputChange(e)}/>
      </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}
                >
                  <Button type='primary' block style={{width:"662px"}} onClick={both}>
                    Add to Book Cart
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
       </div>
   </div>
   {
     touch?
   
   <div className="thank-you"
   
   style={{
     textAlign:"center",
  backgroundColor:"Thistle"
   }}>
     
      <b> <h1
      style={{
      color:"black"
      }}>thank you submitted your form</h1></b>
      <div
      >
      <ul className="list-group w-50">
        <li className="list-group-item">your Booking Name is: {user.fname} {user.lname}</li>
        <li className="list-group-item">your Booking Mobile No. is: {user.mobile}</li>
        <li className="list-group-item">your Booking Email is: {user.email}</li>
        <li className="list-group-item">your Booking Date is: {user.booking}</li>
        <li className="list-group-item">your Booking People is: {user.people}</li>
        <li className="list-group-item">your Booking Place is: {user.desti}</li>
      </ul>
      <h1> <b> Your Form Submitted Succesfully ... thank you 😊 </b></h1>
      </div>
   </div>:null}
   
 </div>        
              
              
              
             
    )
}
