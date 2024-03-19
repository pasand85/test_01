import React from 'react'
import './styles.css'
import db from './db.json'
import db2 from './db2'
import BlogList from './BlogList'
import BlogList2 from './BlogList2'

export default function Home2 () {

    const [blogs, setBlogs] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:7000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, [])

    return (
        <div className="v">
            {blogs && <BlogList2 key={blogs.id} blogs={blogs}/>}


        </div>
    )


}
