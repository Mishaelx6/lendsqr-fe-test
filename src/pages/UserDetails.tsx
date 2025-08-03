import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import '../styles/main.scss';
import '../styles/user-details.scss';

const UserDetails = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <Navbar />
      <main className="dashboard-content">
        <div className="scroll-body user-details-page">
          <button className="back-button">← Back to Users</button>

          <div className="header-actions">
            <div className="user-info-card">
              <div className="avatar-circle">GE</div>
              <div className="user-meta">
                <h2>Grace Effiom</h2>
                <p>LSQFf587g90</p>
              </div>
              <div className="user-tier">
                <p>User’s Tier</p>
                <div className="stars">
                  <span className="star filled">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
              </div>
              <div className="account-info">
                <h2>₦200,000.00</h2>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>

            <div className="user-actions">
              <button className="blacklist">Blacklist User</button>
              <button className="activate">Activate User</button>
            </div>
          </div>

          {/* Tabs */}
          <div className="details-tabs">
            <span className="tab active">General Details</span>
            <span className="tab">Documents</span>
            <span className="tab">Bank Details</span>
            <span className="tab">Loans</span>
            <span className="tab">Savings</span>
            <span className="tab">App and System</span>
          </div>

          {/* Details Sections */}
          <div className='details-container'>
          <div className="details-section">
            <h3>Personal Information</h3>
            <div className="info-grid">
              <div><p className="label">Full Name</p><p>Grace Effiom</p></div>
              <div><p className="label">Phone Number</p><p>07060780922</p></div>
              <div><p className="label">Email Address</p><p>grace@gmail.com</p></div>
              <div><p className="label">BVN</p><p>07060780922</p></div>
              <div><p className="label">Gender</p><p>Female</p></div>
              <div><p className="label">Marital Status</p><p>Single</p></div>
              <div><p className="label">Children</p><p>None</p></div>
              <div><p className="label">Type of Residence</p><p>Parent's Apartment</p></div>
            </div>
          </div>

          <div className="details-section">
            <h3>Education and Employment</h3>
            <div className="info-grid">
              <div><p className="label">Level of Education</p><p>B.Sc</p></div>
              <div><p className="label">Employment Status</p><p>Employed</p></div>
              <div><p className="label">Sector of Employment</p><p>FinTech</p></div>
              <div><p className="label">Duration of Employment</p><p>2 years</p></div>
              <div><p className="label">Office Email</p><p>grace@lendsqr.com</p></div>
              <div><p className="label">Monthly Income</p><p>₦200,000.00 - ₦400,000.00</p></div>
              <div><p className="label">Loan Repayment</p><p>40,000</p></div>
            </div>
          </div>

          <div className="details-section">
            <h3>Socials</h3>
            <div className="info-grid">
              <div><p className="label">Twitter</p><p>@grace_effiom</p></div>
              <div><p className="label">Facebook</p><p>Grace Effiom</p></div>
              <div><p className="label">Instagram</p><p>@grace_effiom</p></div>
            </div>
          </div>

          <div className="details-section">
            <h3>Guarantor</h3>
            <div className="info-grid">
              <div><p className="label">Full Name</p><p>Debby Ogana</p></div>
              <div><p className="label">Phone Number</p><p>07060780922</p></div>
              <div><p className="label">Email Address</p><p>debby@gmail.com</p></div>
              <div><p className="label">Relationship</p><p>Sister</p></div>
            </div>
          </div>

        </div>
        </div>
      </main>
    </div>
  );
};

export default UserDetails;
