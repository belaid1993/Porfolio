import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Particles from 'react-particles-js';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },

            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato"
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 6,
                size_min: 0.1,
                sync: false
              }
            },
            opacity:{
              value:1,
              random: true,
              anim:{
                enable:true,
                speed:1,
                opacity_min:0.1,
                sync:true
              }
            }
          }
        }}
      />
    </div>
  )
}

export default Home
