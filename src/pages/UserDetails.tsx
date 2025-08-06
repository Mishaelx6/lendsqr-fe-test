import { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import '../styles/main.scss';
import '../styles/user-details.scss';

const UserDetails = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('selectedUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <div className="dashboard-layout">Loading...</div>;

  const {
    profile,
    accountBalance,
    accountNumber,
    education,
    socials,
    guarantor
  } = user;

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content main-content">
        <Navbar />
        <div className="scroll-body user-details-page">
          <button className="back-button" onClick={() => window.history.back()}>
            ← Back to Users
          </button>

          <div className="header-actions">
            <div className="user-info-card">
              <div className="avatar-circle">
                {profile?.firstName[0]}
                {profile?.lastName[0]}
              </div>
              <div className="user-meta">
                <h2>
                  {profile?.firstName} {profile?.lastName}
                </h2>
                <p>{user?.id}</p>
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
                <h2>₦{accountBalance}</h2>
                <p>{accountNumber}/Providus Bank</p>
              </div>
            </div>

            <div className="user-actions">
              <button className="blacklist">Blacklist User</button>
              <button className="activate">Activate User</button>
            </div>
          </div>

          <div className="details-tabs">
            <span className="tab active">General Details</span>
            <span className="tab">Documents</span>
            <span className="tab">Bank Details</span>
            <span className="tab">Loans</span>
            <span className="tab">Savings</span>
            <span className="tab">App and System</span>
          </div>

          <div className="details-container">
            <div className="details-section">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div><p className="label">Full Name</p><p>{profile?.firstName} {profile?.lastName}</p></div>
                <div><p className="label">Phone Number</p><p>{profile?.phoneNumber}</p></div>
                <div><p className="label">Email Address</p><p>{user?.email}</p></div>
                <div><p className="label">BVN</p><p>{profile?.bvn}</p></div>
                <div><p className="label">Gender</p><p>{profile?.gender}</p></div>
                <div><p className="label">Marital Status</p><p>Single</p></div>
                <div><p className="label">Children</p><p>None</p></div>
                <div><p className="label">Type of Residence</p><p>Parent's Apartment</p></div>
              </div>
            </div>

            <div className="details-section">
              <h3>Education and Employment</h3>
              <div className="info-grid">
                <div><p className="label">Level of Education</p><p>{education?.level}</p></div>
                <div><p className="label">Employment Status</p><p>{education?.employmentStatus}</p></div>
                <div><p className="label">Sector of Employment</p><p>{education?.sector}</p></div>
                <div><p className="label">Duration of Employment</p><p>{education?.duration}</p></div>
                <div><p className="label">Office Email</p><p>{education?.officeEmail}</p></div>
                <div><p className="label">Monthly Income</p>
                  <p>₦{education?.monthlyIncome?.[0]} - ₦{education?.monthlyIncome?.[1]}</p>
                </div>
                <div><p className="label">Loan Repayment</p><p>₦{education?.loanRepayment}</p></div>
              </div>
            </div>

            <div className="details-section">
              <h3>Socials</h3>
              <div className="info-grid">
                <div><p className="label">Twitter</p><p>{socials?.twitter}</p></div>
                <div><p className="label">Facebook</p><p>{socials?.facebook}</p></div>
                <div><p className="label">Instagram</p><p>{socials?.instagram}</p></div>
              </div>
            </div>

            <div className="details-section">
              <h3>Guarantor</h3>
              <div className="info-grid">
                <div><p className="label">Full Name</p><p>{guarantor?.firstName} {guarantor?.lastName}</p></div>
                <div><p className="label">Phone Number</p><p>{guarantor?.phoneNumber}</p></div>
                <div><p className="label">Email Address</p><p>{guarantor?.address}</p></div>
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
