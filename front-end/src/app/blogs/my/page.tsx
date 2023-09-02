"use client"; 
import { useEffect, useState } from 'react';
import { IBlog } from '../../models/blog';
import { createBlog, getMyBlogs } from '../../services/blog';
import AppNavbar from '../../components/Navbar';
import BlogCard from '../../components/BlogCard';
import BlogModal from '../../components/BlogModal';



export default function MyBlogs() {

  const [blogList, setBlogList] = useState<IBlog[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleCreateBlog = async (blogData: IBlog) => {
    
    try {
      await createBlog(blogData);
      fetchBlogs();
    } catch (error) {
      
    }
  };

  const handleEditBlog = (blogData: IBlog) => {
  };

  useEffect(()=> {
    fetchBlogs();
  },[]);

  const fetchBlogs =async () => {
    const res = await getMyBlogs(); 
    setBlogList(res.data);
  }

  return (
    <div>
      <AppNavbar />     
      <main className="container">
        <h1 className='my-3 text-center'>My BLogs</h1>
        <div className='row'>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Create Blog
          </button>
        </div>
        <div className="row">
          {blogList.map((blog) => (
            <div key={blog.id} className="col-md-4">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
        <BlogModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onSave={(blogData) => {
            if (blogData.id) {
              handleEditBlog(blogData);
            } else {
              handleCreateBlog(blogData);
            }
          }}
        />
      </main>  
    </div>
  );
}
