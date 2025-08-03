
import { BsThreeDotsVertical } from 'react-icons/bs';
import '../styles/UserTable.scss';

const UsersTable = () => {
  const users = [
    {
      organization: 'Lendsqr',
      username: 'adedeji',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'Active',
    },
     {
      organization: 'Lendsqr',
      username: 'debby Ogana',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'Active',
    },
     {
      organization: 'Lendsqr',
      username: 'grace Effiom',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'Blacklisted',
    },
     {
      organization: 'Lendsqr',
      username: 'Tosin Dokunmu',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'Active',
    },
     {
      organization: 'Lendsqr',
      username: 'adedeji',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'pending',
    },
     {
      organization: 'Lendsqr',
      username: 'Grase Effiom',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'pending',
    },
     {
      organization: 'Lendsqr',
      username: 'tosin dokunmu',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'Active',
    },
     {
      organization: 'Lendsqr',
      username: 'Debby Ogana',
      email: 'adedeji@lendsqr.com',
      phone: '08012345678',
      dateJoined: 'May 15, 2023',
      status: 'Blacklisted',
    },
  ];

  return (
    <div className="users-table">
      <div className="table-controls">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.organization}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.dateJoined}</td>
              <td>
                <span className={`status ${u.status.toLowerCase()}`}>{u.status}</span>
              </td>
              <td>
                <BsThreeDotsVertical className="action-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
  <div className="rows-info">Showing 1–50 of 100</div>
  <div className="pagination">
    <button className="page-btn">&lt;</button>
    <button className="page-btn active">1</button>
    <button className="page-btn">2</button>
    <button className="page-btn">3</button>
    <button className="page-btn">4</button>
    <button className="page-btn">5</button>
    <span className="dots">...</span>
    <button className="page-btn">10</button>
    <button className="page-btn">&gt;</button>
  </div>
</div>

    </div>
  );
};

export default UsersTable;
