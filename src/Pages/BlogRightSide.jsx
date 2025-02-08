import React from 'react';
import BlogData from './BlogData';

const BlogRightSide = ({ search, setSearch }) => {
    const handleTagClick = (tag) => {
        setSearch(tag);
    };
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    const allTags = BlogData.flatMap(blog => blog.tags);
    const uniqueTags = [...new Set(allTags)];
    return (
        <div className="blogRightSide">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search blog..."
                    value={search}
                    className="searchBar"
                    onChange={handleSearch}
                />
                <div className="btn" onClick={handleSearch}><button>Search</button></div>
            </div>
            <div className="tags">
                <div className="head">
                    <h2>Tags Cloud</h2>
                </div>
                <div className="tagList">
                    {uniqueTags.map((tag, index) => (
                        <span
                            key={index}
                            className="tag"
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogRightSide;
