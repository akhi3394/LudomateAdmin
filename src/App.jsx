import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import ActiveCompany from './components/Dashboard/ActiveCompany';
// import ActiveDrivers from './components/Dashboard/ActiveDrivers';
// import ActiveTrucksData from './components/Dashboard/ActiveTrucks';
// import OrderStatus from './components/Dashboard/OrderStatus';
// import Revenue from './components/Dashboard/Revenue';
// import TotalShipments from './components/Dashboard/TotalShipments';
import Layout from './components/Layout/Layout';
// import Customization from './pages/Customization/Customization';
import Dashboard from './pages/Dashboard/Dashboard';
// import InvoicePayment from './pages/InvoicePayment/InvoicePayment';
import Login from './pages/Login/Login';
// import ManageCompany from './pages/ManageCompany/ManageCompany';
// import OrderShipping from './pages/OrderShipping/OrderShipping';
// import ReportsData from './pages/ReportsData/ReportsData';
import ResetPassword from './pages/ResetPassword/ResetPassword';
// import Security from './pages/Security/Security';
import Signup from './pages/Signup/Signup';
// import Support from './pages/Support/Support';
// import UserRole from './pages/UserRole/UserRole';
import store from './redux/store';
// import CompanyManagement from './components/ManageCompany/CompanyManagement/Index';
// import Performance from './components/ManageCompany/CompanyManagement/Performance';
// import ActivityLogs from './components/ManageCompany/CompanyManagement/ActivityLogs';
import TruckManagement from './components/ManageCompany/TruckManagement/Index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div
          className="min-h-screen w-full"
          // background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)',
          style={{
            background: '#F0F6FA'
          }}
        >
          <Routes>
            {/* Routes without Sidebar and Header */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Login />} />

            {/* Routes with Sidebar and Header */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
    
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;