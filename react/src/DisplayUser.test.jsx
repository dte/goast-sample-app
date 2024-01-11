import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  const handleClearName = () => {
    // Set username to an empty object instead of null to prevent TypeError
    setUsername({});
  };

  return (
    <>
      {/* Check if username has properties first and last to prevent TypeError */}
      {username && username.first && username.last ? (
        <>
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      ) : (
        <div>No user selected</div>
      )}
      <button onClick={handleClearName}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
