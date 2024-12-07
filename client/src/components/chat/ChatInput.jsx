import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Handle sending the message
    console.log("Message sent", message);
  };

  useEffect(()=>{
console.log(message)
  },[message])

  return (
    <div className="flex items-center gap-2 p-4 border-t border-muted-foreground z-10 relative">
      <Input
        placeholder="Type your message..."
        className="flex-1"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSend} className="px-4 py-2">
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
