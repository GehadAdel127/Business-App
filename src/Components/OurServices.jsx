import React from 'react'
import like from '../Images/like.png'
import smartPhone from '../Images/smartphone.png'
import user from '../Images/user.png'
import './OurServices.css'

const OurServices = () => {
    return (
        <div className='ourServices'>
            <div className="cards">
                <div className="mainCard">
                    <h5>our services</h5>
                    <h2>We Will Help Your Business Growing</h2>
                </div>
                <div className="subCards">
                    <div className="card">
                        <img src= {smartPhone} alt="smartPhone" />
                        <h2>Social Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In officiis obcaecati iusto
                        </p>
                    </div>
                    <div className="card">
                        <img src= {user} alt="smartPhone" />
                        <h2>Business Ideas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In officiis obcaecati iusto
                        </p>
                    </div>
                    <div className="card">
                        <img src= {like} alt="smartPhone" />
                        <h2>Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In officiis obcaecati iusto
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices