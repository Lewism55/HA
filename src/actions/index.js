export const setPage = (pageType) => {
    return {
        type: pageType,
        payload: pageType
    };
};

export const setBlogId = (blogId) => {
    return {
        type: blogId,
        payload: blogId
    }
}

export const setProductId = (productId) => {
    return {
        type: productId,
        payload: productId
    }
}