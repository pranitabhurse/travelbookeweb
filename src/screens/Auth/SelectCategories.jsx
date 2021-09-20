import React from 'react';
import { Button, Layout, Progress, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Auth.scss';

const { Content } = Layout;
const { Title } = Typography;

const SelectCategories = () => {
  return (
    <div>
      <Content >
        <Progress strokeLinecap='radius' percent={50} />
        <Button className='topButton' type='primary'>
          Continue &nbsp; &nbsp;&nbsp;{<ArrowRightOutlined />}
        </Button>

        <Title style={{ color: 'black', margin: '100px 50px' }} level={1}>
          Pick Your Interest
        </Title>

        <Title
          style={{ color: 'black', marginTop: '-40px', marginLeft: '50px' }}
          level={3}
        >
          We've hand-curated symbols for these types
        </Title>
        <div style={{ marginTop: '100px' }}>
          <div style={{ display: 'flex' }}>
            <Button className='groupbtn'>Food</Button>
            <Button className='groupbtn'>Nutrition</Button>
            <Button className='groupbtn'>Bakery</Button>
            <Button className='groupbtn'>Food Shop</Button>
            <Button className='groupbtn'>Bakery Shop</Button>
            <Button className='groupbtn'>Food Truck</Button>
          </div>
          <div style={{ display: 'flex' }}>
            <Button className='groupbtn'>Market</Button>
            <Button className='groupbtn'>Catering</Button>
            <Button className='groupbtn'>Baking</Button>
            <Button className='groupbtn'>Cookies</Button>
            <Button className='groupbtn'>Desserts</Button>
            <Button className='groupbtn'>Chef</Button>
          </div>
          <div style={{ display: 'flex' }}>
            <Button className='groupbtn'>Fruit</Button>
            <Button className='groupbtn'>Eat</Button>
            <Button className='groupbtn'>Apple</Button>
            <Button className='groupbtn'>Ice Cream</Button>
            <Button className='groupbtn'>Sweets</Button>
            <Button className='groupbtn'>Pizza</Button>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default SelectCategories;
