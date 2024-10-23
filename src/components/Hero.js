import React from 'react'
import Header from './Header';

function Hero() {
  return (
  <>
    <Header />
    <div className="Hero-container">
            <img src="https://images.unsplash.com/photo-1583032353423-04fd96ef221c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero image" />
            <div className="Hero-text">
                <h1>it's all about tasty & healthy food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sapiente illo tempora libero distinctio perspiciatis repellendus doloremque laboriosam quaerat temporibus consequuntur fugiat assumenda, dolore neque quia quidem suscipit, dolores id.</p>
            </div>
        </div>
  </>
  )
}

export default Hero;