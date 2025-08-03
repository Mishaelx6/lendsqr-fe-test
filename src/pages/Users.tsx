import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import UserFilterSidebar from '../components/UserFilterSidebar';
import '../styles/main.scss';
import '../styles/dashboard.scss';
import '../styles/_users.scss'; 
import '../styles/UsersTable2.scss';
import { FaUserFriends, FaUsers, FaMoneyCheckAlt, FaPiggyBank } from 'react-icons/fa';
import DetailedUsersTable from '../components/DetailedUsersTable';


const UsersPage = () => {
 return (
  <div className="dashboard-layout">
    <Sidebar />
    <Navbar />
    <main className="dashboard-content">
      <div className="scroll-body">
        <h2 className="dashboard-title">Users</h2>

        {/* Top Metric Cards */}
        <div className="metrics-cards">
          <div className="card">
            <div className="icon"><FaUsers style={{ color: '#e47c98' }} /></div>
            <p className="label">Users</p>
            <p className="value">2,453</p>
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

        {/* Content Area: Filters + Table */}
        <div className="users-page-grid" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          
          {/* Filter Sidebar */}
          <UserFilterSidebar />

          {/* Users Table */}
          <div className="users-table-wrapper" style={{ flex: 1 }}>
            <div className="table-header">
              <h3>Users Table</h3>
              <div className="table-controls">
                <input type="text" placeholder="Search..." className="search-input" />
              </div>
            </div>
            <DetailedUsersTable />
          </div>
        </div>
      </div>
    </main>
  </div>
);
}

export default UsersPage;
