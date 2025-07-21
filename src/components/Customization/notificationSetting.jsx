import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const notificationSettingsData = [
  {
    label: "Enable Push Notification",
    stateKey: "push",
  },
  {
    label: "Enable Email Notification",
    stateKey: "email",
  },
  {
    label: "Enable SMS Alert",
    stateKey: "sms",
  },
];

const notificationCategories = [
  {
    title: "Shipment And Loads",
    desc:
      "Send real-time updates on loads, Load status change (e.g., In Transit → Delivered), Driver assigned to shipment, Delivery failed / delayed",
    stateKey: "shipment",
  },
  {
    title: "Payments",
    desc:
      "Send real-time updates on Payment successful, Payment failed, Invoice generated, Subscription renewal reminder, Subscription expired",
    stateKey: "payments",
  },
  {
    title: "Accounts and User Activity",
    desc:
      "Send real-time updates on New user signup, Login from new device/IP, Profile update or password changed, Team member added or removed",
    stateKey: "accounts",
  },
  {
    title: "Reports & Insights",
    desc:
      "Send real-time updates on Weekly performance summary, Monthly shipment report, Missed delivery threshold alert",
    stateKey: "reports",
  },
  {
    title: "Compliance and Safety",
    desc:
      "Send real-time updates on Driver incident reported Compliance document expiring soon, Vehicle service overdue",
    stateKey: "compliance",
  },
  {
    title: "Optional Advance Toggle",
    desc:
      "Send real-time updates on Driver incident reported Compliance document expiring soon, Vehicle service overdue",
    stateKey: "optional",
  },
];

const initialToggles = {
  push: true,
  email: true,
  sms: true,
  shipment: true,
  payments: true,
  accounts: true,
  reports: true,
  compliance: true,
  optional: true,
};

// Reusable ToggleSwitch using Headless UI's Switch
function ToggleSwitch({ enabled, onChange }) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${
        enabled ? "bg-[#34C759]" : "bg-[#23235B]"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none`}
    >
      <span
        className={`${
          enabled ? "translate-x-5" : "translate-x-1"
        } inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow`}
      />
    </Switch>
  );
}

const NotificationSetting = () => {
  const [toggles, setToggles] = useState(initialToggles);

  const handleToggle = (key, value) => {
    setToggles((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full  mx-auto">
        <div className="bg-[#131060] rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          {/* Notification Setting */}
          <p className="text-white text-[22px] font-semibold pb-4">
            Notification Setting
          </p>
          <div className="flex flex-col gap-4">
            {notificationSettingsData.map((item) => (
              <div
                key={item.stateKey}
                className="flex items-center justify-between gap-2 rounded-lg border border-[#CFCFE6] px-4 py-4  w-full"
                style={{ minHeight: 63 }}
              >
                <span className="text-white text-[16px] font-medium">
                  {item.label}
                </span>
                <ToggleSwitch
                  enabled={toggles[item.stateKey]}
                  onChange={(val) => handleToggle(item.stateKey, val)}
                />
              </div>
            ))}
          </div>

          {/* Allow Notification For */}
          <p className="text-white text-[18px] font-semibold py-4">
            Allow Notification For
          </p>
          <div className="flex flex-col gap-4">
            {notificationCategories.map((cat) => (
              <div
                key={cat.stateKey}
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 rounded-lg border border-[#CFCFE6] px-4 py-4  w-full"
                style={{ minHeight: 91 }}
              >
                <div className="flex-1">
                  <div className="text-white text-[16px] font-medium">
                    {cat.title}
                  </div>
                  <div className="text-[#CFCFE6] text-[13px] mt-1">
                    {cat.desc}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 flex-shrink-0">
                  <ToggleSwitch
                    enabled={toggles[cat.stateKey]}
                    onChange={(val) => handleToggle(cat.stateKey, val)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
