<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { FaImage, FaCloudUploadAlt } from "react-icons/fa";


const Input = () => {
    const [messageText, setMessageText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const storedJWT = localStorage.getItem('token');
        console.log('------->TOKEN ',storedJWT) 
        
        try {
            const response = await fetch('http://localhost:8080/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedJWT}` 
                },
                body: JSON.stringify({uploads : messageText
                }) 
            });

            if (!response.ok) {
                throw new Error('Error sending message');
            }
            setMessageText(''); 

        } catch (error) {
            console.error('Error:', error);
            // Handle the error (display a message to the user)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Type Something" 
                value={messageText}
                onChange={e => setMessageText(e.target.value)}
            />
            
            <button type="submit">Send</button> 
        </form>
    );
=======
import React from "react";
import { FaImage, FaCloudUploadAlt } from "react-icons/fa";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something" />
      <div className="send"></div>
      <FaImage />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file">
        <FaCloudUploadAlt />
      </label>
      <button>Send</button>
    </div>
  );
>>>>>>> fixedethan
};

export default Input;
