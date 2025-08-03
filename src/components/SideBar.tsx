
import '../styles/_nav2.scss';
import {
  FaBriefcase, FaHome, FaUsers, FaUserCheck, FaMoneyBill,
  FaNetworkWired, FaPiggyBank, FaClipboardList, FaUserShield,
  FaBuilding, FaLayerGroup, FaHandshake, FaUserCircle
} from "react-icons/fa";
import { MdArrowDropDown, MdReport } from "react-icons/md";
import { AiOutlineBank, AiOutlineTransaction, AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/images/Group.svg" alt="Logo" />
      </div>

      <div className="nav-links">
        <div className="nav-group">
          <div className="nav-item">
            <FaBriefcase />
            <span>Switch Organization</span>
            <MdArrowDropDown style={{ marginLeft: "auto" }} />
          </div>
          <div className="nav-item active">
            <FaHome />
            <span>Dashboard</span>
          </div>
        </div>

        <p className="nav-group-title">CUSTOMERS</p>
        <div className="nav-group">
          <div className="nav-item"><FaUsers /><span>Users</span></div>
          <div className="nav-item"><FaUserCheck /><span>Guarantors</span></div>
          <div className="nav-item"><FaMoneyBill /><span>Loans</span></div>
          <div className="nav-item"><FaNetworkWired /><span>Decision Models</span></div>
          <div className="nav-item"><FaPiggyBank /><span>Savings</span></div>
          <div className="nav-item"><FaClipboardList /><span>Loan Requests</span></div>
          <div className="nav-item"><FaUserShield /><span>Whitelist</span></div>
          <div className="nav-item"><FaUserCircle /><span>Karma</span></div>
        </div>

        <p className="nav-group-title">BUSINESSES</p>
        <div className="nav-group">
          <div className="nav-item"><FaBuilding /><span>Organization</span></div>
          <div className="nav-item"><FaLayerGroup /><span>Loan Products</span></div>
          <div className="nav-item"><FaPiggyBank /><span>Savings Products</span></div>
          <div className="nav-item"><FaMoneyBill /><span>Fees and Charges</span></div>
          <div className="nav-item"><AiOutlineTransaction /><span>Transactions</span></div>
          <div className="nav-item"><FaHandshake /><span>Services</span></div>
          <div className="nav-item"><AiOutlineBank /><span>Service Account</span></div>
          <div className="nav-item"><FaLayerGroup /><span>Settlements</span></div>
          <div className="nav-item"><MdReport /><span>Reports</span></div>
        </div>

        <p className="nav-group-title">SETTINGS</p>
        <div className="nav-group">
          <div className="nav-item"><AiOutlineSetting /><span>Preferences</span></div>
          <div className="nav-item"><FaMoneyBill /><span>Fees and Pricing</span></div>
          <div className="nav-item"><FaClipboardList /><span>Audit Logs</span></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
