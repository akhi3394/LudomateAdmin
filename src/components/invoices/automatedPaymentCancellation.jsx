const PaymentCard = ({ iconPath, method, amount, description }) => {
    return (
        <div className="flex items-center p-4 border border-[#D4D4D4] rounded-lg mb-4 bg-[#090466]">
            <div className="mr-4">
                <div className="w-[54px] h-[54px] bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={iconPath} alt="payment-icon" className="w-[54px] h-[54px]" />
                </div>
            </div>
            <div className="flex-1">
                <p className="text-[#A3A3A3] text-sm mb-1">Payment Received</p>
                <p className="text-white text-[16px] font-medium">{method}</p>
                <p className="text-white text-[16px] font-medium">{amount}</p>
                <p className="text-[#A8A8A8] text-[12px]">{description}</p>
            </div>
        </div>
    );
};

export const AutomatedPaymentCancellation = () => {
    return (
        <div>
            <h1 className="text-white text-lg font-semibold mb-4">Automated Payment Collection</h1>
            <div className="bg-[#131060] p-5 rounded-[11px]">
                <PaymentCard
                    iconPath="/invoice/gateway.svg"
                    method="Subscription"
                    amount="$199.99"
                    description="Subscription renewable by Bluedart Logistics"
                />
                <PaymentCard
                    iconPath="/invoice/paypal.svg"
                    method="Subscription"
                    amount="$199.99"
                    description="Subscription renewable by Bluedart Logistics"
                />
                <PaymentCard
                    iconPath="/invoice/bank.svg"
                    method="Bank Transfer (** 5689)"
                    amount="$199.99"
                    description="Subscription renewable by Bluedart Logistics"
                />
            </div>
        </div>
    );
};
