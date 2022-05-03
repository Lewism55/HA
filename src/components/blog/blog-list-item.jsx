import React from 'react';

function BlogListItem(props) {
    
    //This will be swapped out with the api call to DB later
    async function fetchBlogListItem() {
        
    }

    return(
        <>
            <div key={props.post.id} className='blog-list-item'>
                    <div className='blog-list-item-left'>
                        <div className='blog-list-item-title'>{props.post.title}</div>
                        <div className='blog-list-item-date'>{props.post.date}</div>
                        <div className='blog-list-item-content-snippet'>{props.post.contentSnippet}</div>
                    </div>
                    <div className='blog-list-item-right'>
                        <div>
                            <img src={props.post.authorImage} className='blog-list-item-author-image'/>
                        </div>
                        <div className='blog-list-item-author-name'>{props.post.authorName}</div>
                    </div>
            </div>
        </>
    )
}

export default BlogListItem;