import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLigin";



const Singup = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const {createUser} = useContext(AuthContext);
   
    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser)
        })
    }

    console.log(watch("example"))

    return (
        <>
        <Helmet>
                <title>Bistro Boss | Sing Up</title>
            </Helmet>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name")} name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"  {...register("email",{ required: true })} name="email" className="input input-bordered"  />
                                {errors.name && <span className="text-red-400">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")} name='password' className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                           
                           <input className='btn btn-primary' type="submit" value="Sing up" />
                       </div>
                       <p><small>All Ready Have an Account <Link to='/login'>Sing in</Link></small></p>
                       <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Singup;