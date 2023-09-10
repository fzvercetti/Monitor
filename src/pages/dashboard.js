import"./dashboard.css";
import SideMenu from "../components/SideMenu/index";
import Viewer from "../components/viewer";

function Dashboard() {
    return (
        <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <Viewer></Viewer>
        </div>
    );
  }
  export default Dashboard;