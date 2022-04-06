import React from "react"
import memesData from "../memesData"
export default function Form(){
    const [imageUrl,setImageUrl] = React.useState("")
    function handleClick(){
        let randomNumber=Math.floor(100*Math.random());
        let randomUrl=memesData.data.memes[randomNumber].url
        setImageUrl(randomUrl)
    }
    return (
        <div>
            <form>
                <div className="input-div">
                    <input className="input1" placeholder="Enter upper text"></input>
                    <input className="input2" placeholder="Enter lower text"></input>
                </div>
                <input onClick={handleClick} type="button" value="Get a new meme image 🖼️"/>
                {imageUrl && <img className="memeImage" src={imageUrl}/>}
            </form>
        </div>
    )
}