
const UserFilterSidebar = () => {
  return (
    <div className="user-filter-sidebar">
      <form>
        <div className="form-group">
          <label>Organization</label>
          <select>
            <option>Select</option>
            <option>Lendsqr</option>
            <option>Irorun</option>
          </select>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select>
            <option>Select</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
            <option>Blacklisted</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="reset" className="reset">Reset</button>
          <button type="submit" className="filter">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default UserFilterSidebar;
