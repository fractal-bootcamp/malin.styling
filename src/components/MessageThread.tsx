import React from 'react';
import { useState } from 'react'
import '../index.css'
import Alice from '../assets/alice.png'
import Bob from '../assets/bob.png'

const avatarSource = {
  Alice: Alice,
  Bob: Bob
}

const Avatar = ({ user }) => {
  const whichAvatar = avatarSource[user];

  return (
    <img className='w-12 h-12 rounded-full border-2 border-slate-300 mx-4 my-2'
      src={whichAvatar}
    />
  )
}

function MessageThread() {

  interface chat {
    message: string,
    alignment: string,
    avatar: string
  }

  const dummyData: chat[] = [
    {
      message: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut eros laoreet, tincidunt quam ut, iaculis leo. Nullam tincidunt diam erat. Mauris pellentesque efficitur rutrum. Nunc rhoncus ultricies est, quis ullamcorper justo placerat eget. Nullam fringilla condimentum bibendum. Quisque elementum augue ut felis eleifend, et tristique odio hendrerit. ',
      alignment: 'right',
      avatar: 'Alice',
    },
    {
      message: 'Vivamus ac arcu bibendum, finibus nunc nec, molestie sapien. Phasellus tempus nunc lacus, non fermentum massa luctus scelerisque. Morbi suscipit efficitur massa. Cras porttitor placerat metus, eget vulputate erat ultrices id.',
      alignment: 'right',
      avatar: 'Alice',
    },
    {
      message: 'Suspendisse viverra eleifend ornare. In cursus nec sem non molestie. Nam pharetra nisl dui, eget lacinia tortor elementum ut. Nulla lobortis convallis laoreet. Vestibulum in lacinia massa. Donec at mollis massa. Vestibulum eu eros id magna vehicula maximus. Sed in diam ac sem maximus semper. Pellentesque quis urna ut est mollis sodales.',
      alignment: 'left',
      avatar: 'Bob',
    },
    {
      message: 'Pellentesque diam nulla, tempus vel dolor ac, aliquet pretium tortor. Duis ut diam fringilla felis tincidunt condimentum a vitae odio.',
      alignment: 'right',
      avatar: 'Alice',
    }
  ]

  const messageBlock = () => {
    return (
      dummyData.map((item: chat, index: number) => {
        return (
          <ul key={index} className='flex flex-col m-2'>
            <div className={`
              flex 
              ${item.alignment === 'right' ? 'flex-row' : 'flex-row-reverse'}
              items-start`}>
              <div className={`
                flex items-center 
                ${item.alignment === 'right' ? 'bg-blue-300' : 'bg-gray-300'}
                max-w-xl 
                rounded-2xl 
                p-4 mb-2
                `}>
                {item.message}
              </div>
              <div>
                <Avatar user={item.avatar} />
              </div>
            </div>
          </ul>
        )
      }
      ))
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <header className='text-3xl'>
        Message Thread
      </header>
      <div className='w-full max-w-2xl border-2'>
        {messageBlock()}
      </div>
    </div>
  )

}

export default MessageThread;