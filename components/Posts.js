import React from 'react'
import Post from "../components/Post"

const test = [
    {
        name: "Jack",
        src: "/image/Solar.jpg"
    },
    {
        name: "Lisa",
        src: "/image/Solar.jpg"
    }
]

const Posts = () => {
    return (
        <div>
            {test.map((data, index ) => (
                <Post data={data} key={index} postImage={true} />
            ))}
        </div>
    )
}

export default Posts