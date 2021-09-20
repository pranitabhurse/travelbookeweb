import React from 'react';
import { Link } from 'react-router-dom';
import {
  DownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input, Typography, Dropdown, Layout, Menu } from 'antd';

import './Header.scss';

const { Search } = Input;
const { Title } = Typography;
const { Header } = Layout;

const Headers = () => {
  function handleMenuClick(e) {
    console.log('click', e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
     <a href="https://www.tripadvisor.in/Attractions-g12432580-Activities-Shegaon_Buldhana_District_Maharashtra.html"> <Menu.Item  key='1'>Shegao</Menu.Item></a>
     <a href="https://www.thrillophilia.com/places-to-visit-pune"> <Menu.Item key='2'>Pune</Menu.Item></a>
   <a href="https://www.thrillophilia.com/places-to-visit-in-mahabaleshwar-in-one-day"><Menu.Item key='3'>Mahabaleshawar</Menu.Item></a>
     <a href="https://www.thrillophilia.com/10-best-places-to-visit-in-goa"> <Menu.Item key='4'>Goa</Menu.Item></a>
      <a href="https://www.tripadvisor.in/Attractions-g679021-Activities-Shirdi_Ahmednagar_District_Maharashtra.html"><Menu.Item key='5'>Shiradi</Menu.Item></a>
     <a href="https://www.tripadvisor.in/Tourism-g2435013-Dongargarh_Rajnandgaon_District_Chhattisgarh-Vacations.html"> <Menu.Item key='6'>Dongargadh</Menu.Item></a>
     <a href="https://www.thrillophilia.com/places-to-visit-in-mumbai"> <Menu.Item key='7'>Mumbai</Menu.Item></a>
    </Menu>
  );
  return (
    
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: '#4aaff7',
      }}
    >
      <div className='logo' />

      <div
        className='headContainer'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Title style={{ marginRight: '10rem', marginTop: '8px' }} level={1}>
          Tour
        </Title>

        <Search
          className='search'
          placeholder=' search courses, sounds and profiles....'
          allowClear
          size='middle'
          style={{ width: 500, marginRight: '10rem' }}
        />

        <h1>
          <b>
            <HeartOutlined style={{ marginLeft: '2rem' }} />
          </b>
        </h1>

        <Link to='/profile'>
          <h1>
            <b>
            <UserOutlined style={{ marginLeft: '2rem' }} />
            </b>
          </h1>
        </Link>
        <h1>
          <b>
            <ShoppingCartOutlined style={{ marginLeft: '2rem' }} />
          </b>
        </h1>
      </div>
      <Menu mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='2'>
          <Dropdown.Button
            onClick={handleMenuClick}
            overlay={menu}
            icon={<DownOutlined />}
          >
            View Places
          </Dropdown.Button>
        </Menu.Item>

       <Link to='/home'> <Menu.Item key='2'> Home</Menu.Item></Link>
       <Link to="/about"> <Menu.Item key='3'> About</Menu.Item></Link>
       <Link to ="/contact-us"> <Menu.Item key='4'> Contact</Menu.Item></Link>
        <Link to="/our-services"><Menu.Item key='5'> Services</Menu.Item></Link>
        
      </Menu>
    </Header>
  );
};

export default Headers;
