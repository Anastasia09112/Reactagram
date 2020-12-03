import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://miro.medium.com/max/11520/1*MKkufG0eyT0IQ5wZ70qKxQ.jpeg" 
                  alt="girl" 
                  name="Ashley" 
                  min/>
            <Palette />
        </div>
    )
}

export default Profile;