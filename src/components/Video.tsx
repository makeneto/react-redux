import YouTube from "react-youtube"

export default function Video() {
    const opts = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
        },
    }

    return (
        <div className="w-full h-full">
            <YouTube videoId="CPRx_WVkJ8g" opts={opts} className=" h-full" />
        </div>
    )
}
