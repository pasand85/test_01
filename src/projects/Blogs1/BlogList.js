import React from "react";

export default function BlogList (props) {

    const [showBody, setShowBody] = React.useState(false)
    const [showHide, setShowHide] = React.useState(true)


    function showBtn () {
        setShowBody(prevShowBody => !prevShowBody)
        setShowHide(prevShowHide => !prevShowHide)
    }

    return(
        <div className='blogBg'>
            <div className="title"></div>
            
                <div className='blogs' key={props.blog.id}>
                    <h1>Title: {props.blog.title}</h1>
                    <button onClick={showBtn}>
                        {showHide ? 'show':'hide'}
                    </button>
                   {showBody && <h6>{props.blog.body}</h6>}
                    <h4>by: {props.blog.author}</h4>
                    <hr />

                </div>

               
        
        </div>
    )

}