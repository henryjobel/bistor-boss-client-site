import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const LOgin = () => {

    const captchaRef = useRef(null)
    const [disabled,setDisabled] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])


    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    const validedCaptcher = () =>{
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)) {
            setDisabled(false)

        }
        else{
            setDisabled(true)
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card lg:w-1/2  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password'  className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                        <LoadCanvasTemplate />
                            <input type="text"  ref={captchaRef} placeholder="Type the Text Avobe" name='captchar'  className="input input-bordered" required />
                            <button onClick={validedCaptcher} className='btn btn-outline btn-xs mt-2'>Valided</button>
                            
                        </div>
                        <div className="form-control mt-6">
                           
                            <input disabled={disabled} className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LOgin;