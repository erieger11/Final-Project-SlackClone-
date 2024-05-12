import React, { useState, useEffect } from 'react';

const PrivateChat = () => {
  const [privateChats, setPrivateChats] = useState([]);
  const [newPrivateChatName, setNewPrivateChatName] = useState("");

//   useEffect(() => {
//     fetch('http://localhost:8080/api/user-profiles')
//       .then(response => response.json())
//       .then(data => {
//         // Assuming the API returns an array of user profiles with a 'name' property
//         setPrivateChats(data.map((profile, index) => ({
//           id: index + 1,
//           name: profile.name
//         })));
//       })
//       .catch(error => {
//         console.error('Error fetching user profiles:', error);
//         // Handle the error (display a message to the user, etc.)
//       });
//   }, []);

  const handleAddPrivateChat = () => {
    if (newPrivateChatName.trim() === "") {
      return;
    }
    const newPrivateChat = {
      id: privateChats.length + 1,
      name: newPrivateChatName
    };
    setPrivateChats([...privateChats, newPrivateChat]);
    setNewPrivateChatName("");
  };

  const handleDeletePrivateChat = (chatId) => {
    const updatedPrivateChats = privateChats.filter(chat => chat.id !== chatId);
    setPrivateChats(updatedPrivateChats);
  };

  return (
    <div>
      <h2>Direct Messages</h2>
      <ul>
        {/* Render list of private chats */}
        {privateChats.map(chat => (
          <li key={chat.id}>
            <span>{chat.name}</span>
            <button onClick={() => handleDeletePrivateChat(chat.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="add-channel">
        <input
          type="text"
          placeholder="Enter direct message"
          value={newPrivateChatName}
          onChange={(e) => setNewPrivateChatName(e.target.value)}
        />
        <button onClick={handleAddPrivateChat}>+</button>
      </div>
    </div>
  );
}

export default PrivateChat;
