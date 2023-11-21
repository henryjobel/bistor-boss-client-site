import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../Components/Hoocks/useAxiosSceure';
import useCart from './../../../Components/Hoocks/useCart';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const CeckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret , setClientSecret] = useState('')
    const [transationId,setTransactionID] = useState('')
    const stripe = useStripe()
    const {user} = useContext(AuthContext)
    const elements = useElements()
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart()
    const totalPrice = cart.reduce((total,item) => total  + item.price , 0)

    useEffect(  ()=>{
      axiosSecure.post("/create-payment-intent",{price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }
        //   confirm payment 
        const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
        console.log('error confirm')
        }
        else{
            console.log('payment intent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('tranjection id ', paymentIntent.id)
                setTransactionID(paymentIntent.id)
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit
             }>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-700">{error}</p>
                {transationId && <p className="text-green-500">Your Transaction id:{transationId}</p>}
            </form>
        </div>
    );
};

export default CeckoutForm;