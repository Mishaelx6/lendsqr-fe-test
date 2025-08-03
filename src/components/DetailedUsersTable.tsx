import { FaFilter, FaEllipsisV, FaEye, FaUserSlash, FaUserCheck } from 'react-icons/fa';
const users = [
  {
    email: 'adedeji@lendsqr.com',
    phone: '08078903721',
    date: 'May 15, 2020 10:00 AM',
    status: 'Inactive',
  },
  {
    email: 'debby2@irorun.com',
    phone: '08160780928',
    date: 'Apr 30, 2020 10:00 AM',
    status: 'Pending',
  },
  {
    email: 'grace@lendstar.com',
    phone: '07060780922',
    date: 'Apr 30, 2020 10:00 AM',
    status: 'Blacklisted',
  },
  {
    email: 'tosin@lendstar.com',
    phone: '07003309226',
    date: 'Apr 10, 2020 10:00 AM',
    status: 'Active',
  },
  // Add more dummy users as needed
];

const DetailedUsersTable = () => {
  return (
    <div className="detailed-users-table">
      <table>
        <thead>
          <tr>
            <th>Organization <FaFilter /></th>
            <th>Username <FaFilter /></th>
            <th>Email <FaFilter /></th>
            <th>Phone Number <FaFilter /></th>
            <th>Date Joined <FaFilter /></th>
            <th>Status <FaFilter /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>Lendsqr</td>
              <td>User</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>
                <span className={`status-tag ${user.status.toLowerCase()}`}>
                  {user.status}
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
