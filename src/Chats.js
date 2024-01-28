import React from 'react';
import Chat from './Chat';

function Chats() {
    return (
        <div className='chats'>
            <Chat 
            name="Mark"
            message="what up mark"
            timestamp="40 sec ago"
            profilePic='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Chat 
            name="raj"
            message="what up raj"
            timestamp="50 sec ago"
            profilePic='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Chat 
            name="jar"
            message="what up jar"
            timestamp="60 sec ago"
            profilePic='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <Chat 
            name="kate"
            message="what up kate"
            timestamp="3 sec ago"
            profilePic='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                  
                  
        </div>
    );
}

export default Chats;