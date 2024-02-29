// import React, { useState } from 'react'; // Import useState

// function SearchBar({ isOpen, toggleSearch, searchFriends, friendList }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredFriends = friendList.filter((friend) =>
//     friend.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={isOpen ? 'search-bar open' : 'search-bar'}>
//       <button onClick={toggleSearch}>Toggle Search</button>
//       <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search friends..." />
//       {/* Display search results here, e.g., using a list component */}
//       {filteredFriends.length > 0 ? (
//         <ul>
//           {filteredFriends.map((friend) => (
//             <li key={friend.id}>{friend.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No friends found.</p>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
