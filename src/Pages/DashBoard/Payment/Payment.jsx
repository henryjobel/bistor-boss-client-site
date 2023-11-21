
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CeckoutForm from './CeckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);



const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading='Please Pay to eat'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CeckoutForm></CeckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;