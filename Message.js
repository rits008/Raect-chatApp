import React ,{forwardRef}from 'react';
import { CardContent, Typography,Card } from '@material-ui/core';
import "./Message.css";
const Message = forwardRef(({ username, message }, ref) => {
   const isUser = username === message.username;
    return (
       
       <div ref={ref} className={`message  ${isUser && `message_user `}`}> 
       <Card className={isUser? "message_usercard" : "message_guestcard"}>
        <CardContent>
            <Typography >
            {!isUser && `${message.username}: `}{message.message}
            </Typography>
        </CardContent>
        </Card>
     </div>
    );
});

export default Message;


