"use client"; 
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { IBlog } from '../../models/blog';
import { getMyBlogs } from '../../services/blog';
import AppNavbar from '../../components/Navbar';
import BlogCard from '../../components/BlogCard';



export default function Home() {

  const [blogList, setBlogList] = useState<IBlog[]>([]);

  useEffect(()=> {
    getMyBlogs()
    .then((res)=> {
      setBlogList(res.data);
    });
  },[]);

  

  return (
    <div>
      <AppNavbar />     
      <main className="container">
        <h1 className='my-3 text-center'>My BLogs</h1>
        <div className="row">
          {blogList.map((blog) => (
            <div key={blog.id} className="col-md-4">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </main>  
    </div>
  );
}
