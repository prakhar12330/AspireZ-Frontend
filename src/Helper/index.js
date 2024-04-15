import React from 'react'
import Favatar from "../component/Favatar";
import { ChatProvider } from "../hooks/useChat";


const Helper = () => {
    return (
        <React.StrictMode>
            <ChatProvider>
                <Favatar />
            </ChatProvider>
        </React.StrictMode>
    )
}

export default Helper;
