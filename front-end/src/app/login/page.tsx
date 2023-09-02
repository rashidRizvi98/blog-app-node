// pages/login.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login | Blog App</title>
      </Head>
      <Navbar />
      <main className="container">
        <h1>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;