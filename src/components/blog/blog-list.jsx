import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BlogListItem from './blog-list-item';
import { blogList } from './mock-data';
import { setBlogId } from '../../actions/index';

function BlogList() {
    const dispatch = useDispatch();

    return(
        <>  
            {blogList.map((post) => 
                <Link 
                    key={post.id} 
                    to={`/blog_list/blog`} 
                    style={{textDecoration: 'none', color: 'black'}}
                    onClick={() => {dispatch(setBlogId(`${post.id}`))}}>
                    <BlogListItem  post={post} />
                </Link>
            )}
        </>
    )
}

export default BlogList;