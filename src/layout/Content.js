import React, { useEffect, useState } from 'react'
import TwitBox from "../components/TwitBox"
import { PopulerIcon } from "../icons/icon"
import pp from "../foto/IMG_E7098.JPG"
import Divider from '../components/Divider'
import db from "../firebase"
import FeedList from '../components/FeedList'
const Content = () => {
    const [tweets, setTweets] = useState([])

    useEffect(() =>
        db.collection('feed')
            .orderBy('timestamp',"desc")
            .onSnapshot((snapshot) =>
                 setTweets(snapshot.docs.map((doc) => doc.data()))), [])
                 console.log(tweets)

    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
            <header className="flex  sticky top-0 z-10 bg-white justify-between items-center p-4 border-b border-gray-extraLight">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base"></PopulerIcon>
            </header>

            <div className="flex space-x-4 px-4 py-3">
                <img src={pp} className="w-11 h-11 rounded-full"></img>
                <TwitBox></TwitBox>
            </div>
            <Divider>
               
            </Divider>
            <FeedList tweets={tweets}></FeedList>
        </main>
    )
}

export default Content
