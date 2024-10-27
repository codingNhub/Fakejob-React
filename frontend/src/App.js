import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HeaderSection from './Components/HeaderSection';
import ExploreOpportunities from './Components/ExploreOpportunities';
import JobTips from './Components/JobTips';
import ClientSatisfaction from './Components/ClientStatisfaction';
import FqaSection from './Components/FqaSection';
import DiscoverJob from './Components/DiscoverJob';
import JobHunt from './Components/JobHunt';
import StayConnect from './Components/StayConnect';
import Get_InTouch from './Components/Get_InTouch';
import SocialMedia from './Components/SocialMedia';
import Login from './Components/Login'; // Import the Login component
import Registration from './Components/Registration';
// import Filter from './Components/Filter';
import { AuthProvider } from './Components/AuthContext';
import NewFilter from './Components/NewFilter';
import PredictJob from './Components/PredictJob';
import PostJob from './Components/PostJob';
import SearchJob from './Components/SarchJob';
function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<> 
            <HeaderSection />
            <ExploreOpportunities />
            <JobTips />
            <ClientSatisfaction />
            <FqaSection />
            <DiscoverJob />
            <JobHunt />
            <StayConnect />
            <Get_InTouch />
            <SocialMedia />
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Filter" element={<NewFilter />} />
          <Route path="/PredictJob" element={<PredictJob />} />
          <Route path="/PostJob" element={<PostJob />} />
          <Route path="/SearchJob" element={<SearchJob />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
