import { FaEllipsisV, FaEye, FaUserSlash, FaUserCheck } from 'react-icons/fa';

type User = {
  email: string;
  phone: string;
  date: string;
  status: string;
  university: string;
  username: string;
};

type Props = {
  users: User[];
};

const DetailedUsersTable = ({ users }: Props) => {
  return (
    <div className="detailed-users-table">
      <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username </th>
            <th>Email </th>
            <th>Phone Number</th>
            <th>Date Joined </th>
            <th>Status </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.university}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>
               <span className={`status-tag ${user.status?.toLowerCase() || 'default'}`}>
               {user.status || 'Unknown'}
             </span>   
              </td>
              <td className="actions">
                <div className="dropdown-trigger">
                  <FaEllipsisV />
                  <div className="dropdown-menu">
                    <div className="dropdown-item"><FaEye /> View Details</div>
                    <div className="dropdown-item"><FaUserSlash /> Blacklist User</div>
                    <div className="dropdown-item"><FaUserCheck /> Activate User</div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailedUsersTable;
