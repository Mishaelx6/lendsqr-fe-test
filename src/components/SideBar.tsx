import { useState, useEffect } from "react";
import '../styles/_nav2.scss';
import {
  FaBriefcase, FaHome, FaUsers, FaUserCheck, FaMoneyBill,
  FaNetworkWired, FaPiggyBank, FaClipboardList, FaUserShield,
  FaBuilding, FaLayerGroup, FaHandshake, FaUserCircle
} from "react-icons/fa";
import { MdArrowDropDown, MdReport } from "react-icons/md";
import { AiOutlineBank, AiOutlineTransaction, AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => isMobile && isOpen && setIsOpen(false);

  const navGroups = [
    {
      title: "CUSTOMERS",
      items: [
        { icon: <FaUsers />, label: "Users" },
        { icon: <FaUserCheck />, label: "Guarantors" },
        { icon: <FaMoneyBill />, label: "Loans" },
        { icon: <FaNetworkWired />, label: "Decision Models" },
        { icon: <FaPiggyBank />, label: "Savings" },
        { icon: <FaClipboardList />, label: "Loan Requests" },
        { icon: <FaUserShield />, label: "Whitelist" },
        { icon: <FaUserCircle />, label: "Karma" }
      ]
    },
    {
      title: "BUSINESSES",
      items: [
        { icon: <FaBuilding />, label: "Organization" },
        { icon: <FaLayerGroup />, label: "Loan Products" },
        { icon: <FaPiggyBank />, label: "Savings Products" },
        { icon: <FaMoneyBill />, label: "Fees and Charges" },
        { icon: <AiOutlineTransaction />, label: "Transactions" },
        { icon: <FaHandshake />, label: "Services" },
        { icon: <AiOutlineBank />, label: "Service Account" },
        { icon: <FaLayerGroup />, label: "Settlements" },
        { icon: <MdReport />, label: "Reports" }
      ]
    },
    {
      title: "SETTINGS",
      items: [
        { icon: <AiOutlineSetting />, label: "Preferences" },
        { icon: <FaMoneyBill />, label: "Fees and Pricing" },
        { icon: <FaClipboardList />, label: "Audit Logs" }
      ]
    }
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"} ${isMobile ? "mobile" : "desktop"}`}>
        <div className="drawer-handle" onClick={toggleSidebar}>
          {isOpen ? "❮" : "❯"}
        </div>

        <div className="sidebar-inner" onClick={closeSidebar}>
          {isOpen && (
            <div className="logo">
              <img src="/images/Group.svg" alt="Logo" />
            </div>
          )}

          <div className="nav-content">
            <div className="nav-group">
              <div className="nav-item">
                <FaBriefcase />
                {isOpen && <span>Switch Organization</span>}
                {isOpen && <MdArrowDropDown style={{ marginLeft: "auto" }} />}
              </div>
              <div className="nav-item active">
                <FaHome />
                {isOpen && <span>Dashboard</span>}
              </div>
            </div>

            {navGroups.map((group) => (
              <div key={group.title}>
                {isOpen && <p className="nav-group-title">{group.title}</p>}
                <div className="nav-group">
                  {group.items.map(({ icon, label }) => (
                    <div key={label} className="nav-item">
                      {icon}
                      {isOpen && <span>{label}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isMobile && isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Sidebar;
