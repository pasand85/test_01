import React from "react";
import './styles.css'

export default function BlogList2 ( {blogs}) {

    const [show,setShow] = React.useState(true)

    function showBtn () {
        setShow(prevShow => !prevShow)
    }


    return (
        <div className="b">
            <h2>All blogs</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <button onClick={showBtn}> Show </button>
                    {show && <h6>{blog.body}</h6>}
                    

                    <p>Written by {blog.author}</p>
                </div>
            ))}

        </div>
    )
}