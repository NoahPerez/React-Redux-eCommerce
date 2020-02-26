import React from 'react';

import './custom-button.styles.scss';


// we take the children from CustomButton 
const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}) => (
        // now if we have a type submit the button will get that because of ...otherProps

        <button className={`${inverted ? 'inverted' : ''} custom-button`} // if inverted is true add the inverted class
            {...otherProps}
        >
            {children}
        </button>
    );

export default CustomButton;