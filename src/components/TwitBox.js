import React, { useState } from 'react'
import { ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon } from '../icons/icon'
import  db from  "../firebase"
import firebase from "firebase"

export default function TwitBox() {

    const [content, setContent] = useState('')
   
    const sendTweet = ()=>{
      if(content!==""){
          db.collection("feed").add({
              displayName:'Ezgi Ekici',
              userName:"@ekiciezgi",
             content,
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          
           
            
          });
          setContent("");
      }
    }
    return (
        <div className="flex-1 flex-col flex mt-2 px-2">
            <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent "
                placeholder="What's happening? "
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></textarea>
            <div className="flex justify-between items-center ">
                <div className="flex -ml-3 ">
                    <div className="flex items-center justify-center w-11 h-11  rounded-full hover:bg-gray-lightest">
                        <ImageIcon
                            className="w-6 h-6 text-primary-base">
                        </ImageIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11  rounded-full hover:bg-gray-lightest">
                        <GIFIcon
                            className="w-6 h-6 text-primary-base">
                        </GIFIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11  rounded-full hover:bg-gray-lightest">
                        <PollIcon
                            className="w-6 h-6 text-primary-base">
                        </PollIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11  rounded-full hover:bg-gray-lightest">
                        <EmojiIcon
                            className="w-6 h-6 text-primary-base">
                        </EmojiIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11  rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon
                            className="w-6 h-6 text-primary-base">
                        </ScheduleIcon>
                    </div>


                </div>
                <button
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}
                >Tweet</button>
            </div>
        </div>

    )
}
