import { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar'; 
import Navbar from '../components/NavBar';
import UserFilterSidebar from '../components/UserFilterSidebar';
import UsersTable from '../components/UsersTable';
import { FaUserFriends, FaUsers, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';

import '../styles/main.scss';
import '../styles/dashboard.scss';
import '../styles/_users.scss'; 
import '../styles/UsersTable2.scss';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      fetch("https://mockapi.io/api/v1/users") // update with your real endpoint
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("users", JSON.stringify(data));
          setUsers(data);
        })
        .catch(err => console.error("API error:", err));
    }
  }, []);

  return (
   <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content main-content">
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
              <p className="value">2,453</p>
            </div>
            <div className="card">
              <div className="icon"><FaMoneyCheckAlt style={{ color: '#e65353' }} /></div>
              <p className="label">Users with Loans</p>
              <p className="value">12,453</p>
            </div>
            <div className="card">
              <div className="icon"><FaPiggyBank style={{ color: '#f199bc' }} /></div>
              <p className="label">Users with Savings</p>
              <p className="value">102,453</p>
            </div>
          </div>

          <div className="users-page-grid">
            <UserFilterSidebar />
            <div className="users-table-wrapper" style={{ flex: 1 }}>
              <div className="table-header">
                <h3>Users Table</h3>
                <div className="table-controls">
                  <input type="text" placeholder="Search..." className="search-input" />
                </div>
              </div>
             <UsersTable users={users} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
