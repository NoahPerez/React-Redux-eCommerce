import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;  // stripe take prices in cents that is why we need to multiple it by 100
    const publishableKey = 'pk_test_3UsM3TQpRHyKysKPqzlVeRMM00TSftIMkk'; // publisheble key from stripe 


    const onToken = token => {
        console.log(token); // actually this you pass it to your backend to create the charge 
        alert('Payment Successful')

    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Style Ltd.'
            billingAddress
            shippingAddress
            image='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/2425290421537355601-256.png'
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            bitcoin
            alipay
        />

    )
};

export default StripeCheckoutButton;
