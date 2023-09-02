"use client"; 
import { useEffect, useState } from 'react';
import { getBlog } from '../../services/blog';
import { IBlog } from '../../models/blog';
import AppNavbar from '../../components/Navbar';

const BlogDetails = ({ params }: { params: { id: string } }) => {

    const { id } = params;
    const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(()=> {
    try {
        getBlog(id)
        .then(res => {
            setBlog(res.data);
        });
    } catch (error) {
        
    }
  },[])

  return (
    <>
    <AppNavbar/>
    <div className='container'>
      <h2 className='my-3 text-center'>{ blog?.title }</h2>
      <p>Authored by {`${blog?.author.firstName} ${blog?.author.lastName}`}</p>
      <p>{ blog?.content }</p>
    </div>
    </>
  );
};

export default BlogDetails;
