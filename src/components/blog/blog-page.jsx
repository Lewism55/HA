import React from 'react';
import { useSelector } from 'react-redux';
import { blogList } from './mock-data';

function BlogPage() {
    const blog = useSelector(state => state.blog)    
    //This will be swapped out with the api call to DB later
    async function fetchBlogPost(postID) {
        //then slot the return function in here...?
    }

    let blogPost = blogList[blog-1]

    return(
        <>
            <div className='blog-page-container'>
                <div className='blog-info'>
                    <div className='blog-title'>{blogPost.title}</div>
                    <div className='blog-author-info'>
                        <div className='blog-author-image-holder'>
                            <img src={blogPost.authorImage} className='blog-author-image' />
                        </div>
                        <div className='blog-author-name'>{blogPost.authorName}</div>
                        <div className='blog-author-bio'>{blogPost.authorBio}</div>
                    </div>
                </div>
                <div className='blog-content'>{blogPost.content}</div>
            </div>
        </>
    )
}

export default BlogPage;