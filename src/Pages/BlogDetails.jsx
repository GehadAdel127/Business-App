import React from 'react';
import { useParams } from 'react-router';
import Comments from '../Components/Comments';
import HelloImage from '../Components/HelloImage';
import ProjectLinks from '../Components/ProjectLinks';
import './Blog.css';
import BlogData from './BlogData';
import './BlogDetails.css';
import BlogRightSide from './BlogRightSide';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = BlogData.find(blog => blog.id === parseInt(id));
    if (!blog) {
        return <h2>Blog not found!</h2>;
    }
    return (
        <div className='blogDetails'>
            <HelloImage text={blog.head} />
            <div className='contain'>
            <div key={blog.id} className="blogCard">
                <img src={blog.image} alt='postImage' />
                <div className="blogContent">
                    <p>{blog.content}</p>
                </div>
                <ProjectLinks/>
                <Comments/>
            </div>
            <BlogRightSide/>
            </div>
        </div>
    )
}

export default BlogDetails