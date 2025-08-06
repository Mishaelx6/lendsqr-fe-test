
import { useState } from "react";
import '../styles/UserTableResponsive.scss';

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

const UsersTable = ({ users }: { users: User[] }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="users-table-responsive">
      <div className="table-controls">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <table className="desktop-table">
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
                <span className={`status ${u.status?.toLowerCase() || 'unknown'}`}>
                  {u.status || 'Unknown'}
                </span>
              </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem('selectedUser', JSON.stringify(u));
                    window.location.href = '/users/:id';
                  }}
                  className="view-user-btn"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     <div className="mobile-cards" 
       role="region"
       aria-label="Mobile View"
       data-testid="mobile-cards"
     >
        {users.map((u, i) => (
          <div key={i} className="user-card">
            <div className="card-summary" onClick={() => toggleExpand(i)}>
              <div className="user-name">{u.username}</div>
              <span className={`status ${u.status?.toLowerCase() || 'unknown'}`}>
                {u.status || 'Unknown'}
              </span>
            </div>
            {expandedIndex === i && (
              <div className="card-details">
                <div><strong>Organization:</strong> {u.organization}</div>
                <div><strong>Email:</strong> {u.email}</div>
                <div><strong>Phone:</strong> {u.phone}</div>
                <div><strong>Date Joined:</strong> {u.dateJoined}</div>
                <button
                  onClick={() => {
                    localStorage.setItem('selectedUser', JSON.stringify(u));
                    window.location.href = '/users/:id';
                  }}
                  className="view-user-btn"
                >
                  View
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
