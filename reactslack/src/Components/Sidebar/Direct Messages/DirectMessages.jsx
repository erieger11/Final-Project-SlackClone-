import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrivateChat = () => {
  const [privateChats, setPrivateChats] = useState([]);
  const [newPrivateChatName, setNewPrivateChatName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPrivateChats();
  }, []);

  const fetchPrivateChats = async () => {
    try {
      const response = await axios.get('/api/private-chats'); // Replace with your actual backend endpoint
      setPrivateChats(response.data);
    } catch (error) {
      setError("Failed to fetch private chats.");
    }
  };

  const handleAddPrivateChat = async () => {
    if (newPrivateChatName.trim() === "") {
      return;
    }

    try {
      const response = await axios.post('/api/private-chats', { name: newPrivateChatName }); // Replace with your actual backend endpoint
      setPrivateChats([...privateChats, response.data]);
      setNewPrivateChatName("");
    } catch (error) {
      setError("Failed to add private chat.");
    }
  };

  const handleDeletePrivateChat = async (chatId) => {
    try {
      await axios.delete(`/api/private-chats/${chatId}`); // Replace with your actual backend endpoint
      const updatedPrivateChats = privateChats.filter(chat => chat.id !== chatId);
      setPrivateChats(updatedPrivateChats);
    } catch (error) {
      setError("Failed to delete private chat.");
    }
  };

  return (
    <div>
      <h2>Direct Messages</h2>
      {error && <div>Error: {error}</div>}
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
