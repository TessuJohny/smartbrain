import React from 'react';
import './navigation.css';

const Navigation = ({goToPage, isSignedIn}) => {
    if(isSignedIn){
        return (
            <nav className='nav'>
                <p 
                    className='f3 link dim black underline pa3 pointer' 
                    onClick={() => goToPage('signIn')}>Sign Out</p>
            </nav>
        );
    } else{
        return (
            <nav className='nav'>
                <p 
                    className='f3 link dim black underline pa3 pointer' 
                    onClick={() => goToPage('signIn')}>Sign In</p>
                <p 
                    className='f3 link dim black underline pa3 pointer' 
                    onClick={() => goToPage('register')}>Register</p>
            </nav>
        );
    }
}

export default Navigation;