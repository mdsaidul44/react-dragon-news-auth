import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar"; 
import { AuthContext } from "../../Porviders/AuthProvider";
import { useContext } from "react";



const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)
    const handleLogin = e =>{
        e.preventDefault()
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password)

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
        const email = form.get('email')
        const password =form.get('password')
        console.log(email,password)

        signIn(email,password)
        .then(result =>{
            console.log(result.user)

            // navigate 
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center ">
            <h1 className="text-xl font-bold">Please login</h1>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <h1>You do not have an account <Link className="text-pink-600 font-bold" to='/register'>Register</Link></h1>
            </div>
        </div>
    );
};

export default Login;