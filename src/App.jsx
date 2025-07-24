import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Signup from './pages/Signup/Signup';
import UserManagement from './pages/UserManagement/UserManagement';
import GameManagement from './pages/GameManagement/GameManagement';
import Bonus from './pages/Bonus/Bonus';
import Customization from './pages/Customization/Customization';
import ReportsAnalytics from './pages/ReportsAnalytics/ReportsAnalytics';
import ShopOrders from './pages/ShopOrders/ShopOrders';
import PushNotification from './pages/PushNotification/PushNotification';
import Events from './pages/Events/Events';
import Messages from './pages/Messages/Messages';
import Subscription from './pages/Subscription/Subscription';
import Settings from './pages/Settings/Settings';
import Products from './pages/ShopOrders/Products';
import Analytics from './components/Shop/Analytics';
import store from './redux/store';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen w-full" style={{ background: '#F0F6FA' }}>
          <Routes>
            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Protected Dashboard Layout Pages */}
            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/game-management" element={<GameManagement />} />
                <Route path="/bonus" element={<Bonus />} />
                <Route path="/customization" element={<Customization />} />
                <Route path="/reports-analytics" element={<ReportsAnalytics />} />
                <Route path="/shop-orders" element={<ShopOrders />}>
                  <Route index element={<Navigate to="products" />} />
                  <Route path="products" element={<Products />} />
                  <Route path="analytics" element={<Analytics />} />
                </Route>
                <Route path="/push-notification" element={<PushNotification />} />
                <Route path="/events" element={<Events />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;