import React from 'react'
import Post from "../components/Post"

const test = [
    {
        name: "first",
        src: "/image/Solar.jpg"
    },
    {
        name: "second",
        src: "/image/Solar.jpg"
    }
]

const Posts = () => {
    return (
        <div>
            {test.map((data, index ) => (
                <Post data={data} index={index} postImage={true} />
            ))}
        </div>
    )
}

export default Posts