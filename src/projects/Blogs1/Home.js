import React from 'react'
import './styles.css'
import db from './db.json'
import db2 from './db2'
import BlogList from './BlogList'

export default function Home () {

    const [blogs, setBlogs] = React.useState(db2)
    const [reRender, setReRender] = React.useState(true)



    const BlogListElement = blogs.map((blog) => {
        return(
            <BlogList
            key={blog.id}
            blog={blog}
            />
        )}
        )


        
    function showMario () {
        const marioBlogs = db2.filter(blog => blog.author === 'mario')
        setBlogs(marioBlogs)      
    }

    function showYoshi () {
        const yoshiBlogs = db2.filter(blog => blog.author === 'yoshi')
        setBlogs(yoshiBlogs)
        console.log('yoshis blogs')
    }
    
    function showAllBlogs () {
        // setReRender(prevReRender => !prevReRender)
        setBlogs(blogs)
    }

    React.useEffect(() => {
    console.log('useEffect ran')
    fetch('http://localhost:7000/blogs/')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [reRender])


    return(
        <div>
            <h1>My blogs</h1>
            <button onClick={showAllBlogs}>All blogs</button>
            <button onClick={showMario}>Mario's blogs</button>
            <button onClick={showYoshi}>Yoshi's blogs</button>

            {blogs && BlogListElement}
               
        
        </div>
    )




}