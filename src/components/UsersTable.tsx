import { useState } from 'react';
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
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="users-table">
      <div className="table-controls">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* ✅ Wrap table in scroll container — NOT inside table */}
      <div className="table-scroll">
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
            {users.map((u, i) => {
              const isExpanded = expandedRows.includes(i);
              return (
                <tr key={i} className={`table-row ${isExpanded ? 'expanded' : ''}`}>
                  <td data-label="Organization">{u.organization}</td>
                  <td data-label="Username">{u.username}</td>
                  <td data-label="Email">{u.email}</td>
                  <td data-label="Phone Number">{u.phone}</td>
                  <td data-label="Date Joined">{u.dateJoined}</td>
                  <td data-label="Status">
                    <span className={`status ${u.status?.toLowerCase() || 'unknown'}`}>
                      {u.status || 'Unknown'}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-user-btn"
                      onClick={() => {
                        localStorage.setItem('selectedUser', JSON.stringify(u));
                        window.location.href = '/users/:id';
                      }}
                    >
                      View
                    </button>

                    {/* Toggle row on mobile */}
                    <button className="toggle-details" onClick={() => toggleRow(i)}>
                      {isExpanded ? '−' : '+'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="rows-info">Showing 1–{users.length} of {users.length}</div>
        <div className="pagination">
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <span className="dots">...</span>
          <button className="page-btn">5</button>
          <button className="page-btn">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
