import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'InactiveDashboardIcon.svg', activeIcon: 'ActiveDashboardIcon.svg' },
    { label: 'User Management', path: '/user-management', icon: 'InactiveUserManage.svg', activeIcon: 'ActiveUserManage.svg' },
    { label: 'Game management', path: '/game-management', icon: 'InactiveGameManage.svg', activeIcon: 'ActiveGameManage.svg' },
    { label: 'Bonus', path: '/bonus', icon: 'InactiveBonus.svg', activeIcon: 'ActiveBonus.svg' },
    { label: 'Customization', path: '/customization', icon: 'InactiveCustomization.svg', activeIcon: 'ActiveCustomization.svg' },
    { label: 'Report & Analytics', path: '/reports-analytics', icon: 'InactiveReport.svg', activeIcon: 'ActiveReport.svg' },
    { label: 'Shop/Order list', path: '/shop-orders', icon: 'InactiveShop.svg', activeIcon: 'ActiveShop.svg' },
    { label: 'Push Notification', path: '/push-notification', icon: 'InactivePush.svg', activeIcon: 'ActivePush.svg' },
    { label: 'Events', path: '/events', icon: 'InactiveEvents.svg', activeIcon: 'ActiveEvents.svg' },
    { label: 'Messages', path: '/messages', icon: 'InactiveMessages.svg', activeIcon: 'ActiveMessages.svg' },
    { label: 'Subscription', path: '/subscription', icon: 'InactiveSubscription.svg', activeIcon: 'ActiveSubscription.svg' },
    { label: 'Settings', path: '/settings', icon: 'InactiveSettings.svg', activeIcon: 'ActiveSettings.svg' }
  ];

  return (
    <div className="fixed top-0 left-0 w-[268px] h-screen z-10 bg-white flex flex-col">
      {/* Logo */}
      <div className="flex justify-center mt-2 mb-10">
        <img src="/Logo.svg" alt="Dispax Logo" className="w-[97px] h-[67px]" />
      </div>

      {/* Scrollable nav items */}
      <div className="flex-1 overflow-y-auto">
        <ul className="list-none p-0 m-0">
          {navItems.map(item => (
            <li key={item.path} className="flex justify-center mb-2">
              <Link
                to={item.path}
                className={`w-[240px] flex items-center text-[14px] font-medium gap-[18px] p-4 rounded transition-all duration-200 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                    ? 'bg-[#7234FC] text-white font-medium rounded-[8px]'
                    : 'text-black hover:bg-[#f5f5f5]'
                }`}
              >
                <img
                  src={`/${location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? item.activeIcon : item.icon}`}
                  alt={`${item.label} icon`}
                  className="w-[24px] h-[24px]"
                />
                <span className="text-[16px]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout at bottom */}
      <div className="w-full px-[4px] mb-6">
        <Link
          to="/login"
          className="w-[240px] h-[48px] text-[16px] font-medium gap-[32px] border border-[#000] text-center py-2 rounded-[8px] mx-auto flex items-center"
        >
          <img src="/LogoutIcon.svg" alt="logout" className="w-[24px] h-[24px] ml-5" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
