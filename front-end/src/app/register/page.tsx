import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    return (
      <div>
        <main className="container">
          <h1 className="text-center my-5">Register</h1>
            <div className='row'>
              <div className='col-6 offset-3'>
                <RegisterForm />
                <p> 
                  <Link className="nav-link text-primary text-center" href="/login">
                      Already Registered? click here to login
                  </Link>
                </p>
              </div>
            </div>
        </main>
      </div>
    );
  };
  
  export default Register;