import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Cookies } from 'react-cookie';


export default function Login() {
    let nav = useNavigate();

  const cookies = new Cookies();

  const loginHandler = (event) => {
    event.preventDefault();

    var data = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    axios.post('http://localhost:8000/api/frontend/users/login', data)
      .then((result) => {
        if (result.data.status == true) {
          cookies.set('token', result.data.token);
          nav('/home');
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        toast.error('Something went wrong');
      })
  }

  useEffect(() => {
    var token = cookies.get('token');

    if (token != undefined) {
      nav('/home');
    }
  }, []);

  return (
    <>
    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                <form onSubmit={loginHandler}>
                    <ToastContainer />
                    <h1 className='fw-bold pb-5 text-primary'>Login Here</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='fw-bold pb-2'>Email address</label>
                        <input type="email" className="form-control mb-3" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className='fw-bold pb-2'>Password</label>
                        <input type="password" name='password' className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                    </div>
                    <button type="submit" className="btn btn-primary fw-bold form-control">Login</button>
                    <div className='d-flex justify-content-between mt-5' >
                        <button type="submit" className="btn btn-warning fw-bold  ">Login with Google</button>
                        <Link to={'/user-registration'} className=''>Register Here</Link>
                    </div>
                </form>
            </div>
    </>
  )
}
