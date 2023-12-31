"use client"; 
import { useState } from 'react';
import { registerUser } from '../services/user';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      router.push("login")
    } catch (error) {
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className='d-flex justify-content-center my-4'>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
      </div>
    </form>
  );
};

export default RegisterForm;