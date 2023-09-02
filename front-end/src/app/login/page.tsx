import Head from 'next/head';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <main className="container">
        <h1 className='text-center my-5'>Login to blog app</h1>
        <div className='row'>
          <div className='col-6 offset-3'>
          <LoginForm />
          <p> <Link className="nav-link text-primary text-center" href="/register">
                    Not Registered? click here to register
              </Link>
          </p>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Login;