import React, { useState, useEffect } from 'react';

const OnlineUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user-profiles/'); // Replace with your actual API endpoint
        const users = await response.json();
        setUsers(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const renderUsers = () => {
    if (isLoading) {
      return <p>Loading users...</p>;
    } else if (error) {
      return <p>Error: {error}</p>;
    } else {
      return (
        <div className="online-users-container">
          {users.map((user, index) => (
            <div className="user-card" key={user.id}>
              <img
                src={getProfilePictureUrl(user) || 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/friend_zQn7K9N.jpg'} // Default image if getProfilePictureUrl returns falsy
                alt={`${user.username} profile picture`}
              />
              <p>
                {user.username} {user.fullName && `(${user.fullName})`}{' '}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  // Assuming getProfilePictureUrl is a separate function (replace with your implementation)
  const getProfilePictureUrl = user => {
    // Your logic to retrieve the profile picture URL from the user object
    // If the URL cannot be retrieved, return falsy (e.g., null, undefined, or an empty string)
  };

  return (
    <div>
      <h2>Online Users</h2> {/* Changed title to "All Users" */}
      {renderUsers()}
    </div>
  );
};

export default OnlineUsers;
