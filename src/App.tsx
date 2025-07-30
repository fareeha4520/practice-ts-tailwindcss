import CounterDisplay from './components/counter';
import { useState } from 'react';
import './App.css';

export default function Comment() {
  const [activeReply, setActiveReply] = useState<number | null>(null);

  const handleReplyClick = (id: number) => {
    setActiveReply(activeReply === id ? null : id); 
  };

  const comments = [
    {
      id: 1,
      username: 'amyrobson',
      avatar: 'https://interactive-comments-section-azure.vercel.app/images/avatars/image-amyrobson.png',
      time: '1 month ago',
      text: `Impressive! Though it seems the drag feature could be improved. But overall it looks
      incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
    },
    {
      id: 2,
      username: 'maxblagun',
      avatar: 'https://interactive-comments-section-azure.vercel.app/images/avatars/image-maxblagun.png',
      time: '2 weeks ago',
      text: `Woah, your project looks awesome! How long have you been coding for? I'm still new,
       but think I want to dive into React as well soon. Perhaps you can give me an insight on where 
       I can learn React? Thanks!`,
    },
    {
      id: 3,
      username:'ramsesminor',
      avatar:'https://interactive-comments-section-azure.vercel.app/images/avatars/image-ramsesmiron.png',
      time:'1 week ago',
      text:`@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before
       considering React. It's very tempting to jump ahead but lay a solid foundation first.`,
    },
   {
    id: 4,
    username:'juliusomo',
    avatar:'	https://interactive-comments-section-azure.vercel.app/images/avatars/image-juliusomo.png',
    time:'2 days ago',
    text:`@rameseminor I couldn't agree more with this. Everything moves so fast and it always seems
     like everyone knows the newest library/framework. But the fundamentals are what stay constant.`
   }

  ];

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col items-center">
        
          <div 
              className={`flex mt-10 p-1 justify-between bg-white rounded-xl border 
      ${comment.id === 3|| comment.id===4? 'w-[43%]' : 'w-3/5'}
      ${comment.id === 4 ? 'p-0' : 'p-1'}`}>


            <div className="w-12">
              <CounterDisplay 
    initialCount={
    
      comment.id === 2 
        ? 5
        : comment.id === 3      
           ? 4
        : comment.id === 4 
        ? 2
        : 12
    }
/>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={comment.avatar} alt={comment.username} />
                <span className="font-semibold text-sm">{comment.username}</span>
                <span className="text-xs text-gray-500">{comment.time}</span>
                <button
                  className="text-indigo-700 font-semibold ml-auto flex items-center gap-2"
                  onClick={() => handleReplyClick(comment.id)}
                >
                  <img
                    src="https://interactive-comments-section-azure.vercel.app/images/icon-reply.svg"
                    alt="Reply"
                  />
                  Reply
                </button>
              </div>

              <div className="flex">
                <p className="text-md text-gray-500 m-5 mt-2">{comment.text}</p>
              </div>
            </div>
          </div>

        
          {activeReply === comment.id && (
            <div className="flex justify-center mt-4 w-3/5">
              <div className="flex p-4 w-full border rounded-xl bg-gray-50">
                <div>
                  <img
                    src="https://interactive-comments-section-azure.vercel.app/images/avatars/image-juliusomo.png"
                    alt="reply-user"
                  />
                </div>
                <textarea
                  placeholder="Reply"
                  className="w-full min-h-[150px] resize-none border p-2 rounded-xl m-3"
                />
                <button className="mt-6 px-4 py-1 bg-indigo-800 text-white rounded-xl h-10 font-semibold">
                  Reply
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
                <div className="flex justify-center mt-4">
  <div className="flex p-4 w-3/5 border rounded-xl bg-gray-50">
    <div>
      <img
        src="https://interactive-comments-section-azure.vercel.app/images/avatars/image-juliusomo.png"
        alt="reply-user"
      />
    </div>
    <textarea
      placeholder="Add a comment..."
      className="w-full min-h-[150px] resize-none border p-2 rounded-xl m-3"
    />
    <button className="mt-6 px-4 py-1 bg-indigo-800 text-white rounded-xl h-10 font-semibold">
      Send
    </button>
  </div>
</div>

    </>
  );
}

