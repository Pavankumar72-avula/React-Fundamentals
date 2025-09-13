function BlogPost(post){
    return(
        <div>
            <p>Author{post.author}</p>
            <p>title{post.title}</p>
            <p>description{post.description}</p>
        </div>
    )
}

export default BlogPost