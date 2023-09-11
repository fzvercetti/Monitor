import"./dashboard.css";
import SideMenu from "../components/SideMenu/index";
import Viewer from "../components/viewer";
// import PageContent from "../components/pagecontent";

function Dashboard() {
    return (
        <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <Viewer></Viewer>
        </div>
    );
  }
  export default Dashboard;