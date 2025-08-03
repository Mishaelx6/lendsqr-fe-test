import '../styles/UserTable.scss';

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

const UsersTable = ({ users }: { users: User[] }) => {
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
