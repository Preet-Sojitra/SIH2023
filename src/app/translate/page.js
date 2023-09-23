"use client"
import Chat from "@/components/chat"
import WaterMark from "@/components/watermark"
import { IoSend } from "react-icons/io5"
import { chats } from "../../../utils/constants"
import EachChat from "@/components/EachChat"

export default function Page() {
  console.log(chats);
  return (
    <>
      <main className="bg-bgprimary h-screen">
        {/* <WaterMark /> */}

        {/* What to add here to make it a chat Ui for two users? */}

        {/* <Chat /> */}
        <div className="flex flex-col z-5 overflow-y-auto">
          {chats.map((chat)=>{
            return(
              <>
                <EachChat
                  user ={chat.user}
                  computer = {chat.computer}
                />
              </>
            )
          })}
        </div>

        {/* This below code is of input and send */}
        <main className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="border-2 border-action bg-transparent rounded-md w-[40vw] text-xl px-2 py-1"
              placeholder="Enter text to translate"
            />
            <div>
              <div className="bg-secondary px-2 py-2 rounded cursor-pointer">
                <IoSend className="text-white text-lg" />
              </div>
            </div>
          </div>
        </main>
      </main>
    </>
  )
}
