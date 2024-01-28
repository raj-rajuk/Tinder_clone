import React,{useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';


function ChatScreen() {


    const [messages, setMessage] = useState([
        {
            name:'raj',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            message:'Whats up'
        },
        {
            name:'raj',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            message:'Whats up bud'
        },
        {
            message:'good'
        }
    ])

    return (
        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>You matched with raj on !!!</p>     
            {
                messages.map(message =>(
                    message.name ? (
                <div className='chatScreen_message'>
                    <Avatar className='chatScreen_image' alt={message.name} src={message.image}/>
                    <p className='chatScreen_text'>{message.message}</p> 
                    </div>):(
                <div className='chatScreen_message'>
                    <p className='chatScreen_textUser'>{message.message}</p> 
                    </div>)) 
                    )
            }    
                <form  className='chatScreen_input'>
                    <input className='chatScreen_inputField' type='text' placeholder='Type a message'/>
                    <button className='chatScreen_inputButton'>Send</button>
                </form>
            
        </div>
    );
}

export default ChatScreen;