import React from 'react';

function ProductCard(props) {
    
    //This will be swapped out with the api call to DB later
    async function fetchBlogListItem() {
        
    }

    return(
        <>
            <div key={props.item.id} className='prod-card'>
                    <div className='prod-card-top'>
                        <div>
                            <img src={props.item.productImage1} className='prod-card-image'/>
                        </div>
                        <div className='prod-card-image-selector'>.....</div>
                    </div>                    
                    <div className='prod-card-bottom'>
                        <div className='prod-card-name'>{props.item.productName}</div>
                        <div className='prod-card-price'>£{props.item.productPrice}</div>
                    </div>
            </div>
        </>
    )
}

export default ProductCard;