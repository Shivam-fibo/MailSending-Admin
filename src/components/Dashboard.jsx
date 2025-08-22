// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   const [user, setUser] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const showAllUser = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/v1/admin/allUser');
//         const data = await response.json();
//         if (data) {
//           setUser(data);
//         } else {
//           setError('Something went wrong');
//         }
//       } catch (error) {
//         setError('Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };
//     showAllUser();
//   }, []);

//   const handleUpgrade = async (item) => {
//     if (item.isUpgrade) {
//       alert('User is already upgraded');
//       return;
//     }

//     const userId = item._id;

//     try {
//       const response = await fetch('http://localhost:5000/api/v1/admin/updateUser', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({ userId }),
//       });

//       if (response.ok) {
//         alert('User upgraded successfully');
//         setUser((prev) =>
//           prev.map((u) =>
//             u._id === userId ? { ...u, isUpgrade: true } : u
//           )
//         );
//       }
//     } catch (error) {
//       alert('Failed to upgrade user');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">User Dashboard</h1>

//       {loading && <p className="text-center text-gray-500">Loading users...</p>}

//       {error && (
//         <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4 max-w-md mx-auto">
//           {error}
//         </div>
//       )}

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {user.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
//           >
//             <div>
//               <p className="text-lg font-semibold text-gray-800">{item.email}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 Status:{' '}
//                 <span
//                   className={`font-medium ${
//                     item.isUpgrade ? 'text-green-600' : 'text-yellow-600'
//                   }`}
//                 >
//                   {item.isUpgrade ? 'Upgraded' : 'Not Upgraded'}
//                 </span>
//               </p>
//             </div>

//             <button
//               onClick={() => handleUpgrade(item)}
//               className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                 item.isUpgrade
//                   ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
//                   : 'bg-indigo-600 text-white hover:bg-indigo-700'
//               }`}
//               disabled={item.isUpgrade}
//             >
//               {item.isUpgrade ? 'Already Upgraded' : 'Upgrade User'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
