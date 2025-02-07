import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelloImage from '../Components/HelloImage';
import Pagination from '../Components/Pagination';
import reply from '../Images/reply.png';
import './Blog.css';
import BlogData from './BlogData';
import BlogRightSide from './BlogRightSide';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const blogsPerPage = 4;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const filteredBlogs = BlogData.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.content.toLowerCase().includes(search.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className='blog'>
      <HelloImage text='Blog' />
      <div className="blogContainer">
      <BlogRightSide
        search={search}
        setSearch={setSearch}
      />
        <div className="blogLeftSide">
          {currentBlogs.map(blog => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className="blogCard">
                <img src={blog.image} alt='postImage' />
                <div className="blogContent">
                  <h2>{blog.head}</h2>
                  <div className="writer">
                    <img src={reply} alt="writer" />
                    <div className="nameTime">
                      <span>Elmntr</span>
                      <p>10 June 2024</p>
                    </div>
                  </div>
                  <p>{blog.title.substring(0, 500)}...</p>
                  <div className="btn"><button className="readMore"><span className="material-icons-outlined">link</span>Read More</button></div>
                </div>
              </div>
            </Link>
          ))}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
