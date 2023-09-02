"use client"; 
import AppNavbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { getAllBlogs } from './services/blog';
import { IBlog } from './models/blog';
import BlogCard from './components/BlogCard';
import Paginate from './components/Pagination';



export default function Home() {

  const [blogList, setBlogList] = useState<IBlog[]>([]);
  const [totalBlogs, setTotalBlogS] = useState(0);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogsPerPage] = useState(5);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(()=> {
    getAllBlogs({page: currentPage,size: blogsPerPage})
    .then((res)=> {
      setBlogList(res.data.blogs);
      setTotalBlogS(res.data.totalElements);
    });
  },[currentPage]);

  

  return (
    <div>
      <AppNavbar />     
      <main className="container">
        <h1 className='my-3 text-center'>Welcome to the Blog App</h1>
        <div className="row">
          {blogList.map((blog) => (
            <div key={blog.id} className="col-md-4">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
        <div>
        <Paginate
              itemsPerPage={blogsPerPage}
              totalItems={totalBlogs}
              paginate={paginate}
              currentPage={currentPage}
            />
        </div>
      </main>  
    </div>
  );
}
