import './App.css';
import ButtonPopup from './ButtonPopup';
import CampaignList from './CampaignList';
import FilterSelect from './FilterSelect';
import LeftSideBar from './LeftSideBar';
import LoginPage from './LoginPage';
import MyTeam from './MyTeam';
import UploadFile from './UploadFile';
// import Time from './Time';

import User from './User';
import SidebarItem from './sirfile/index';
import FileUpload from './FileUpload';
import OneDriveUpload from './OneDrive';
import OneDriveIntegration from './components/OneDriveIntegration';
import DropBox from './DropBox';



function App() {
  return (
    <div className="App">
     
      <UploadFile/>
      {/* <FileUpload/> */}

      <OneDriveUpload/>
      <DropBox/>

      <OneDriveIntegration/>
    </div>
  );
}

export default App;

