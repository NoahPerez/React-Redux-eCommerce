import React from 'react';

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps} />

        {
            label ?
                (<label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}
                >{label}</label>)
                : null
        }
    </div>
)

export default FormInput;

//  "Hey, I want you to check if a label props is passed. If so, I want you to render a <label></label>  element."

//  "Hey, when you render the <label></label>  element, I want you to apply the class 'shrink' as long there's enough value.length, and always apply class 'form-input-label'"

//  "Hey, I want you to keep whatever label {label} they passed"

// -"Hey, if they didn't pass anything at all, render nothing!"  null