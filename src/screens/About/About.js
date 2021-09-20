import React from 'react'
import { Modal, Button, Avatar } from 'antd';
import profile from "../../assets/images/passphoto.jpg"
export const About = () => {
    return (
        <div>
        <div >
          <div style={{ border:"1px solid white",
              width:"100%",
              }}>
            <div style ={{
              marginTop:"10rem"}}>
            <div 
         >
               <div
               style={{
                   textAlign:"center",
                   border:"1px sold red",
                   boxShadow: "0px 0px 10px #00000040",
                   width:"50%",
                   marginLeft:"25%",
                   borderRadius:"20px"
               }}>
                   <div  >
                       <br/>
                       <Avatar src={profile} size={300} />
                      </div>
                   <h1 style={{
                       color:"black",
                       textAlign:"center"
                   }}>Pranita Bhurse</h1>
                   <p className="">
                  Im Web Developer Working on Accelgrouth Technology Pvt. ltd
                  <br />I am Completed My Graduation From Radhikatai Pandav Collage of Engineering Nagpur
                
                
                <br />
                Stream of Information Technology
                   </p>
                   <br/><br/>
                   <div>
                  <a href="https://www.linkedin.com/in/pranita-bhurse-5188471a0/"> <Button style={{
                       backgroundColor:"DodgerBlue" ,
                       width:"150px",
                       height:"50px",
                       borderRadius:"10px",
                       fontSize:"20px",
                       textAlign:"center",
                       
                   }}> View Profile</Button></a>
                   <br/><br/>
                   </div>
                  
               </div>
               
                </div>
                </div>
                </div>
                </div>
                </div>
    )
}
