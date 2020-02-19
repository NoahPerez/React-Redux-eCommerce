import React from 'react';

import './custom-button.styles.scss';


// we take the children from CustomButton 
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    // now if we have a type submit the button will get that because of ...otherProps

    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;