import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showAllUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/allUser');
        const data = await response.json();
        if (data) {
          setUser(data);
        } else {
          setError('Something went wrong');
        }
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    showAllUser();
  }, []);

  const handleToggleUpgrade = async (item) => {
    const userId = item._id;

    try {
      const response = await fetch('http://localhost:5000/api/admin/updateUser', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const updatedUpgrade = !item.isUpgrade;
        alert(`User ${updatedUpgrade ? 'upgraded' : 'downgraded'} successfully`);
        setUser((prev) =>
          prev.map((u) =>
            u._id === userId ? { ...u, isUpgrade: updatedUpgrade } : u
          )
        );
      } else {
        alert('Failed to update user');
      }
    } catch (error) {
      alert('Request failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">User Dashboard</h1>

      {loading && <p className="text-center text-gray-500">Loading users...</p>}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4 max-w-md mx-auto">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.email}</p>
              <p className="text-sm text-gray-500 mt-1">
                Status:{' '}
                <span
                  className={`font-medium ${
                    item.isUpgrade ? 'text-green-600' : 'text-yellow-600'
                  }`}
                >
                  {item.isUpgrade ? 'Upgraded' : 'Not Upgraded'}
                </span>
              </p>
            </div>

            <button
              onClick={() => handleToggleUpgrade(item)}
              className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                item.isUpgrade
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {item.isUpgrade ? 'Downgrade User' : 'Upgrade User'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
