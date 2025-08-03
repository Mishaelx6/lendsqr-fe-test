import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import '../styles/main.scss';
import '../styles/dashboard.scss';
import UsersTable from '../components/UsersTable';

import { FaUserFriends, FaUsers, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <Navbar />
      <main className="dashboard-content">
        <div className="scroll-body">
          <h2 className="dashboard-title">Users</h2>

          {/* Metric Cards */}
      <div className="metrics-cards">
  <div className="card">
    <div className="icon"><FaUsers style={{ color: '#e47c98' }} /></div>
    <p className="label">Users</p>
    <p className="value">2,453</p>
  </div>
  <div className="card">
    <div className="icon"><FaUserFriends style={{ color: '#854dff' }} /></div>
    <p className="label">Active Users</p>
    <p className="value">1,200</p>
  </div>
  <div className="card">
    <div className="icon"><FaMoneyCheckAlt style={{ color: '#e65353' }} /></div>
    <p className="label">Users with Loans</p>
    <p className="value">700</p>
  </div>
  <div className="card">
    <div className="icon"><FaPiggyBank style={{ color: '#f199bc' }} /></div>
    <p className="label">Users with Savings</p>
    <p className="value">900</p>
  </div>
</div>

          {/* Table Placeholder */}
          <div className="user-table">
            <div className="table-header">
              <h3>Users Table</h3>
              <UsersTable />
            </div>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

