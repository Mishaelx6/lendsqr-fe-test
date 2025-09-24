import { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import '../styles/main.scss';
import '../styles/dashboard.scss';
import UsersTable from '../components/UsersTable';

import { FaUserFriends, FaUsers, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Only fetch from API if not in localStorage
        const existingUsers = localStorage.getItem('users');
        if (existingUsers) {
          setUsers(JSON.parse(existingUsers));
          return;
        }

        const response = await fetch('https://dummyjson.com/users?limit=50');
        const data = await response.json();
        const apiUsers = data.users;

        localStorage.setItem('users', JSON.stringify(apiUsers));
        setUsers(apiUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard-layout">
      <div className="layout">
      <Sidebar />
      
      <main className="dashboard-content main-content ">
        <Navbar />
        <div className="scroll-body">
          <h2 className="dashboard-title">Users</h2>

          <div className="metrics-cards">
            <div className="card">
              <div className="icon"><FaUsers style={{ color: '#e47c98' }} /></div>
              <p className="label">Users</p>
              <p className="value">{users.length}</p>
            </div>
            <div className="card">
              <div className="icon"><FaUserFriends style={{ color: '#854dff' }} /></div>
              <p className="label">Active Users</p>
              <p className="value">{Math.floor(users.length * 0.5)}</p>
            </div>
            <div className="card">
              <div className="icon"><FaMoneyCheckAlt style={{ color: '#e65353' }} /></div>
              <p className="label">Users with Loans</p>
              <p className="value">{Math.floor(users.length * 0.3)}</p>
            </div>
            <div className="card">
              <div className="icon"><FaPiggyBank style={{ color: '#f199bc' }} /></div>
              <p className="label">Users with Savings</p>
              <p className="value">{Math.floor(users.length * 0.4)}</p>
            </div>
          </div>

          <div className="user-table">
            <div className="table-header">
              <h3>Users Table</h3>
             <UsersTable users={users} />
              
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Dashboard;


