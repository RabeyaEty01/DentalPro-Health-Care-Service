import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {  
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const url = './blogs.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className="my-5">
            <h1 className="fw-bold service-text">-Our Latest Blogs-</h1>
            <h3 className="text-secondary">Enjoy Specialized Care Through Precision, Artistry, And Experience</h3>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-1 g-4 my-5">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        ></Blog>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;