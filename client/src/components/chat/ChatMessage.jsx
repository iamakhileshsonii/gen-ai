import React from 'react'
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const ChatMessage = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 p-4">
    {/* Message Header (Avatar and Name) */}
    <div className="flex gap-2 items-center">
      <Avatar className="w-8 h-8 rounded-full overflow-hidden">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="User Avatar"
          className="object-cover w-full h-full"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="font-semibold">Name</p>
    </div>

    {/* Message Body */}
    <div className="bg-gray-800 text-white p-3 rounded-lg max-w-xs">
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, et.</p>
    </div>
  </div>
  )
}

export default ChatMessage