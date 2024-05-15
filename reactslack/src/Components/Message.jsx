import React from 'react';
import Jane from './Assets/Chris.jpg';
import './message.css';
//hi
const Message = ({ msg }) => {
  console.log(msg);
  return (
     <div className="message">
       <div className="messageContent">
         <p>{msg.message}</p>
         <div className="messageInfo">
           <span>{msg.author} - {new Date(msg.timestamp).toLocaleTimeString()}</span>
         </div>
       </div>
     </div>
   );

//     const [oldMessages, setOldMessages] = useState([]);
//      const [isLoading, setIsLoading] = useState(true);
//      const [error, setError] = useState(null);
//
//
//    useEffect(() => {
//        const fetchMessages = async () => {
//          try {
//            const response = await fetch('http://localhost:8080/api/messages');
//            if (!response.ok) {
//              throw new Error('Failed to fetch old messages');
//            }
//            const data = await response.json();
//            setOldMessages(data);
//          } catch (err) {
//            setError(err.message);
//          } finally {
//            setIsLoading(false);
//          }
//        };
//        fetchMessages();
//      }, []);
//
//    const renderMessageData = () => {
//      if (isLoading) {
//        return <p>Loading Messages...</p>;
//      } else if (error) {
//        return <p>Error: {error}</p>;
//      } else if (!oldMessages || oldMessages.length === 0) {
//        return <p>No messages found.</p>;
//      } else {
//        return (
//          <div className="messages-container">
//            {oldMessages.map((msg, index) => (
//              <div key={index} className={`message ${msg.author === localStorage.getItem('authenticatedUsername') ? 'sent' : 'received'}`}>
//                <div className="message-content">
//                  <p>{msg.uploads}</p>
//                </div>
//              </div>
//            ))}
//          </div>
//        );
//      }
//    };
//
//
 };

export default Message;


