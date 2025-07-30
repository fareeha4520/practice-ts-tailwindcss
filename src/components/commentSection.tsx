import React from 'react'
import {useState} from 'react';
 export default function Comment(){
    const [showReplyInput, setShowReplyInput] = useState(false)

  const handleReplyClick = () => {
    setShowReplyInput(!showReplyInput)
  }
return(
      <div className="flex flex-col gap-4 p-4 md:p-6 lg:p-8 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
                <div className=''>
                  <img src="https://interactive-comments-section-azure.vercel.app/images/avatars/image-juliusomo.png"></img>
                </div>
              </div>
      </div>
)


 }