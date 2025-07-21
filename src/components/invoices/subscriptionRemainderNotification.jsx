import { useState } from "react";

const NotificationCard = ({ iconPath, title, action }) => (
    <div className="flex justify-between items-center p-4 rounded-lg mb-4 bg-[#090466] border border-[#D4D4D4]">
        <div className="flex items-center">
            <span className="mr-3 w-[24px] h-[24px] flex items-center justify-center">
                <img src={iconPath} alt="icon" className="w-[24px] h-[24px]" />
            </span>
            <div>
                <p className="text-white text-sm">{title}</p>
                <a href="#" className="text-blue-400 text-[12px]">{action}</a>
            </div>
        </div>
    </div>
);

const ToggleSwitch = ({ label, description, checked, onChange }) => (
    <div className="mb-6">
        <div className="flex justify-between items-center py-4">
            <div>
                <h3 className="text-white">{label}</h3>
                <p className="text-gray-400 text-[12px]">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
        </div>
        <hr className="text-[#cecece] w-full" />
    </div>
);

export const SubscriptionRemainderNotification = () => {
    const [reminderEnabled, setReminderEnabled] = useState(true);
    const [smsEnabled, setSmsEnabled] = useState(true);
    const [alertsEnabled, setAlertsEnabled] = useState(true);

    return (
        <div>
            <h1 className="text-lg font-semibold my-4 text-white">
                Subscription Payment Reminder & Notification
            </h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Panel: Subscription Payment Reminder */}
                <div className="bg-[#131060] text-white p-6 rounded-lg w-full md:w-1/2 border border-white">
                    <h2 className="text-xl font-semibold mb-4">Subscription Payment Reminder</h2>
                    <p className="text-gray-400 mb-6 text-[14px]">
                        Set up auto pay reminder to notify users before their subscription payments are due and when payment fails.
                    </p>

                    <ToggleSwitch
                        label="Reminders before due date"
                        description="Send reminder to users 7 days before the subscription due date."
                        checked={reminderEnabled}
                        onChange={() => setReminderEnabled(!reminderEnabled)}
                    />

                    <ToggleSwitch
                        label="SMS Reminder"
                        description="Send subscription reminder via SMS as well as Email."
                        checked={smsEnabled}
                        onChange={() => setSmsEnabled(!smsEnabled)}
                    />

                    <ToggleSwitch
                        label="Enable failed payment alerts"
                        description="Notify users after a payment fails with details and instructions."
                        checked={alertsEnabled}
                        onChange={() => setAlertsEnabled(!alertsEnabled)}
                    />
                </div>

                {/* Right Panel: Notifications */}
                <div className="bg-[#131060] p-6 rounded-lg w-full md:w-1/2 text-white border border-white">
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>

                    <NotificationCard
                        iconPath="/invoice/notification.svg"
                        title="18 subscriptions set to renew in the next 18 days"
                        action="View subscription list"
                    />
                    <NotificationCard
                        iconPath="/invoice/exclame.svg"
                        title="3 subscription payment failed today"
                        action="View failed transaction"
                    />
                    <NotificationCard
                        iconPath="/invoice/cross.svg"
                        title="Stripe api failed to process payment check payment gateway"
                        action="View details"
                    />

                    <div className="flex justify-between items-center mt-6 bg-[#090466] p-4 rounded-lg border border-[#D4D4D4]">
                        <div className="flex items-center">
                            <span className="mr-3 w-[24px] h-[24px] flex items-center justify-center">
                                <img src="/invoice/revenue.svg" alt="revenue" className="w-[24px] h-[24px]" />
                            </span>
                            <div>
                                <p className="text-white text-sm">This week's revenue - $15,369</p>
                                <p className="text-gray-400 text-[12px]">New subscription 12</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
