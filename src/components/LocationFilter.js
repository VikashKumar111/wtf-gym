// import React, { useState } from "react";

// const LocationFilter = ({ gyms }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredGyms, setFilteredGyms] = useState(gyms);
//   console.log(gyms);

//   const handleSearch = (e) => {
//     const searchValue = e.target.value;
//     setSearchTerm(searchValue);

//     // Filter the data based on the search term
//     const filtered = gyms.filter((gym) =>
//       gym.city.toLowerCase().includes(searchValue.toLowerCase())
//     );

//     setFilteredGyms(filtered);
//   };
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <div>
//         {filteredGyms.map((filteredGym) => (
//           <div key={filteredGym.id} className="gym_item">
//             <img
//               src="https://i.pinimg.com/564x/d5/a8/05/d5a805871f757157192ab1020081fd05.jpg"
//               alt="image"
//               className="gym_image"
//             />
//             <div className="gym_info">
//               <h2>{filteredGym.gym_name}</h2>
//               <p>
//                 {filteredGym.address1}, {filteredGym.address2}
//               </p>
//               <p>
//                 {filteredGym.city}, {filteredGym.country}
//               </p>
//               <p>{filteredGym.description}</p>
//               <p>Distance: {filteredGym.distance} miles</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LocationFilter;
