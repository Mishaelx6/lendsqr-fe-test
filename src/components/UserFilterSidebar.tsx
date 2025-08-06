const UserFilterSidebar = () => {
  return (
    <div className="user-filter-sidebar">
      <form>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <select id="organization">
            <option>Select</option>
            <option>Lendsqr</option>
            <option>Irorun</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status">
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
