import React from 'react';
import { Button, Typography, Layout } from 'antd';
import place1 from '../../../assets/images/goa-place.jfif';
import place2 from '../../../assets/images/shegao.jfif';
import place3 from '../../../assets/images/mahabaleshwar-photo.jfif';
import place4 from '../../../assets/images/tajmehal.jfif';
import place5 from '../../../assets/images/shiradi-sai.jfif';
import place6 from '../../../assets/images/tirupati.jfif';
import next from '../../../assets/img/next.png';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const { Content } = Layout;

const TrendingWeek = () => {
  let profileBox = {
    margin: '20px 20px 20px 20px',
  };
  let topButton = {
    background: '#4aaff7',
    color: '#fff',
    height: '50px',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '10px',
    width: '150px',

    borderRadius: '10px',
    fontSize: '25px',
  };

  return (
    <div>
      <Layout className='layout'>
        <Content className='site-layout' style={{ padding: '0' }}>
          <div
            className='site-layout-background'
            style={{
              padding: '50px',
              minHeight: 380,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightGrey',
            }}
          >
            <div style={{ marginRight: '50px' }}>
              <Title style={{ textAlign: 'center' }} level={1}>
                <span style={{ color: 'black' }}>Trending </span>
                <span style={{ color: '#4aaff7' }}>Places</span>
              </Title>
              <h4 style={{ textAlign: 'center', color: 'black' }}>
                After a successful test in select countries, today we’re
                launching Reels ads to the world.Reels is the best place
                <br /> on Instagram to reach people who don’t follow you and a
                growing global stage where brands and <br /> creators can be
                discovered by anyone.
              </h4>
              <br />
              <br />
              <div className='myReels'style={{display:"flex"}}>
                <div className='profileBox' style={profileBox}>
                  <img src={place1} width='350px' alt='' />
                  <div style={{ textAlign: 'center', color: 'black' }}>
                    <h1 style={{ color: 'black', margin: '10px' }}>
                      <b>Goa</b>
                    </h1>
                    <h3 style={{ color: 'black', margin: '10px' }}>
                    Western Ghats
                    </h3>
                   <a href="https://www.thrillophilia.com/10-best-places-to-visit-in-goa"> <Button style={topButton} type='primary'>
                      Visit
                    </Button></a>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={place2} width='310px' alt='' />
                  <div style={{ textAlign: 'center', color: 'black' }}>
                    <h1 style={{ color: 'black', margin: '10px' }}>
                      <b>Shegao</b>
                    </h1>
                    <h3 style={{ color: 'black', margin: '10px' }}>
                     Sant Gajanan Maharaj
                    </h3>
                   <a href="https://www.tripadvisor.in/Attractions-g12432580-Activities-Shegaon_Buldhana_District_Maharashtra.html"> <Button style={topButton} type='primary'>
                      Visit
                    </Button></a>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={place3} width='410px' alt='' />
                  <div style={{ textAlign: 'center', color: 'black' }}>
                    <h1 style={{ color: 'black', margin: '10px' }}>
                      <b>mahabaleshwar</b>
                    </h1>
                    <h3 style={{ color: 'black', margin: '10px' }}>
                    hill station 
                    </h3>
                   <a href="https://www.thrillophilia.com/places-to-visit-in-mahabaleshwar-in-one-day"> <Button style={topButton} type='primary'>
                      Visit
                    </Button></a>
                  </div>
                </div>
              </div>
              <div className='myReels' style={{display:"flex"}}>
                <div className='profileBox' style={profileBox}>
                  <img src={place5} width='350px' alt='' />
                  <div style={{ textAlign: 'center', color: 'black' }}>
                    <h1 style={{ color: 'black', margin: '10px' }}>
                      <b>Shiradi</b>
                    </h1>
                    <h3 style={{ color: 'black', margin: '10px' }}>
                      Shri Saibaba
                    </h3>
                    <a href="https://www.tripadvisor.in/Attractions-g679021-Activities-Shirdi_Ahmednagar_District_Maharashtra.html"><Button style={topButton} type='primary'>
                      Visit
                    </Button></a> 
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={place4} width='350px' alt='' />
                  <div style={{ textAlign: 'center', color: 'black' }}>
                    <h1 style={{ color: 'black', margin: '10px' }}>
                      <b>Tajmehal</b>
                    </h1>
                    <h3 style={{ color: 'black', margin: '10px' }}>
                      sign of Love
                    </h3>
                   <a href="https://www.thrillophilia.com/places-to-visit-in-agra"> <Button style={topButton} type='primary'>
                      Visit
                    </Button></a>
                  </div>
                </div>
                <div className='profileBox' style={profileBox}>
                  <img src={place6} width='410px' alt='' />
                  <div style={{ textAlign: 'center', color: 'black' }}>
                    <h1 style={{ color: 'black', margin: '10px' }}>
                      <b>tirupati</b>
                    </h1>
                    <h3 style={{ color: 'black', margin: '10px' }}>
                      Richest Tempale
                    </h3>
                   <a href="https://www.tripadvisor.in/Attractions-g297587-Activities-Tirupati_Chittoor_District_Andhra_Pradesh.html"> <Button style={topButton} type='primary'>
                      Visit
                    </Button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </Content>
      </Layout>
    </div>
  );
};

export default TrendingWeek;
