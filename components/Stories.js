import StoryCard from "../components/StoryCard"

const stories = [
    {
        name: "Bruh",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Bruh2",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Bruh3",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Bruh4",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
    {
        name: "Bruh5",
        src: "/image/Anton.png",
        profile: "/image/Solar.jpg"
    },
]

const Stories = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto" >
            {stories.map((data , index) => (
                <StoryCard name={data.name} src={data.src} profile={data.profile} index={index}  />
            ))}
        </div>
    )
}

export default Stories