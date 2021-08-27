import React from 'react'
import { ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon } from '../icons/icon'
import image from "../foto/download.png"
import pp from "../foto/IMG_E7098.JPG"
export default function FeedItem({ timestamp, displayName, userName, content }) {
  
    return (
        <article className="flex space-x-3 border-b border-gray-extraLight px-3 py-4 cursor-x cursor-pointer">

            <img src={pp} alt="profile" className="w-11 h-11 rounded-full"></img>
            <div className="flex-1">
                <div className="flex items-center text-sm">

                    <h4 className="font-bold">{displayName}</h4>
                    <span className="text-gray-dark ">{userName}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"></div>
                    <span className="text-gray-dark">
                        {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>
                        <p className="mt-2 text-gray-900 text-sm">{content}</p>
                {image && <img src={image} className="my-2  max-h-96 rounded-xl"/>}
               
             <ul className="flex justify-between max-w-md ml-1 mt-3">
             
                 <li className="flex items-center  text-gray-dark text-sm ">
                 <div className="flex items-center justify-center rounded-full group-hover:bg-primary-base">
                     <ReplyIcon className="w-5 h-5 "></ReplyIcon>
                 </div>
                 <span className="group-hover:text-primary-base  ">7</span>
                 </li>
                 <li className="flex items-center  text-gray-dark text-sm ">
                 <div className="flex items-center justify-center rounded-full group-hover:bg-primary-base">
                     <ReTweetIcon className="w-5 h-5 "></ReTweetIcon>
                 </div>
                 <span className="group-hover:text-primary-base  ">7.85</span>
                 </li>
                 <li className="flex items-center  text-gray-dark text-sm ">
                 <div className="flex items-center justify-center rounded-full group-hover:bg-primary-base">
                     <LikeIcon className="w-5 h-5 "></LikeIcon>
                 </div>
                 <span className="group-hover:text-primary-base  ">7</span>
                 </li>
                 <li className="flex items-center  text-gray-dark text-sm ">
                 <div className="flex items-center justify-center rounded-full group-hover:bg-primary-base">
                     <ShareIcon className="w-5 h-5 "></ShareIcon>
                 </div>
                 <span className="group-hover:text-primary-base  ">7</span>
                 </li>
             </ul>
            </div>

        </article>
    )
}
