import StoryCard from "../components/StoryCard"

const stories = [
    {
        name: "Bruh",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Jack",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Mike",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Lisa",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "John freeman",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
]

const Stories = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto" >
            {stories.map((data , index) => (
                <StoryCard name={data.name} src={data.src} profile={data.profile} key={index}  />
            ))}
        </div>
    )
}

export default Stories