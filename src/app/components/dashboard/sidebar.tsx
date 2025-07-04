import userImg from "../../../assets/images/small/dashboard-menu-profile-img.png";

function Sidebar() {
  return (
    <div className="col-lg-3">
      <div className="nav dashboard-sidebar flex-column nav-pills ">
        <div className="dashboard-menu-profile-main">
          <div className="dashboard-menu-profile">
            <div className="dashboard-menu-profile-img">
              <img src={userImg} alt="img" />
            </div>
            <div className="dashboard-menu-profile-text">
              <h4>David Warrior</h4>
              <p>user id #054501</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
