import SideBar from "./SideBar";
import "./SideBar.scss";
import "react-pro-sidebar/dist/css/styles.css";

const Admin = (props) => {
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <SideBar
            
            collapsed={false}
            rtl={false}
            toggled={false}
            handleToggleSidebar={() => {}}
          />
        </div>
        <div className="admin-content">content</div>
      </div>
    </>
  );
};

export default Admin;
