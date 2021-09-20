import React from 'react';
import { Button } from 'antd';
import { HeartOutlined, MenuOutlined, UnlockOutlined } from '@ant-design/icons';

import './Profile.scss';

import profile from '../../assets/img/Mask Group 84.png';
import profilepic from '../../assets/img/Mask Group 85.png';
import profilePost from '../../assets/img/Group 8115.png';
import profilePost2 from '../../assets/img/Group 8116.png';
import profilePost3 from '../../assets/img/Group 8118.png';
import share from '../../assets/img/share.png';

const Profile = () => {
  return (
    <div>
      <img src={profile} alt='Profile Banner' />
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: '-150px', display: 'flex' }}>
            <img src={profilepic} alt='Profile' />
          </div>

          <div style={{ marginLeft: '20px' }}>
            <Button className='topShare'>
              Share &nbsp;&nbsp; <img src={share} width='30px' alt='Share' />
            </Button>
            <span style={{ marginRight: '50px', fontSize: '20px' }}>
              <h1 style={{ color: 'black' }}>Shweta Sharma</h1>
            </span>

            <h1
              style={{ color: 'black', fontSize: '30px', marginTop: '-20px' }}
            >
              @Moni_roy
            </h1>

            <p style={{ fontSize: '30px' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, s<br />
              ed diam nonumy eirmod tempor invidunut
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            alignItems: 'center',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          <div>
            <h1 style={{ color: 'black', margin: '50px ' }}>42.4K Followers</h1>{' '}
          </div>
          |
          <div>
            <h1 style={{ color: 'black', margin: '50px' }}>5 Following</h1>{' '}
          </div>
          |
          <div>
            <h1 style={{ color: 'black', margin: '50px' }}>748k Likes</h1>{' '}
          </div>
        </div>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className='topButton'>Follow</Button>{' '}
            <Button className='topCancel'>Message</Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '80%',
              alignItems: 'center',
              marginLeft: '10%',
              marginRight: '10%',
            }}
          >
            <div>
              <h1 style={{ color: 'black', margin: '50px ' }}>
                <MenuOutlined />
              </h1>
            </div>
            <div>
              <h1 style={{ color: 'black', margin: '50px' }}>
                <HeartOutlined />
              </h1>
            </div>
            <div>
              <h1 style={{ color: 'black', margin: '50px' }}>
                <UnlockOutlined />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='myReels' style={{ justifyContent: 'center' , display:"flex"}}>
        <img src={profilePost} className='profileBox' alt='ProfilePost' />

        <img src={profilePost2} className='profileBox' alt='ProfilePost' />

        <img src={profilePost3} className='profileBox' alt='ProfilePost' />
      </div>
      <div className='myReels' style={{ justifyContent: 'center', display:"flex" }}>
        <img src={profilePost} className='profileBox' alt='ProfilePost' />

        <img src={profilePost2} className='profileBox' alt='ProfilePost' />

        <img src={profilePost3} className='profileBox' alt='ProfilePost' />
      </div>
      <div className='myReels' style={{ justifyContent: 'center',display:"flex" }}>
        <img src={profilePost} className='profileBox' alt='ProfilePost' />

        <img src={profilePost2} className='profileBox' alt='ProfilePost' />

        <img src={profilePost3} className='profileBox' alt='ProfilePost' />
      </div>
    </div>
  );
};

export default Profile;
