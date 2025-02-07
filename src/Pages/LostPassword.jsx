import React from 'react'
import HelloImage from '../Components/HelloImage'

const LostPassword = () => {
    return (
        <div className='myAccount'>
                <HelloImage text='Lost Password' />
            <div className="container">
                <form>
                    <h3>Register</h3>
                    <hr />
                    <div className="email">
                        <label htmlFor="email">Your Email *</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="btn">
                        <button type="submit">Set Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LostPassword