import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TabSwitcher from "./SubscriptionTabs";
import PlanCards from "./subscriptionPlanCards";
import RenewableTable from "./renewableTable";
import CancellationTable from "./cancellationTable";


const Subscription = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState("Plans");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setCurrentTab(tab);
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div>
     <div className="flex justify-between mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Subscription & Plan</p>
                <button
                    className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                >
                    Add Plan
                </button>
            </div>

      <TabSwitcher currentTab={currentTab} setTab={handleTabChange} />

      {currentTab === "Plans" && <PlanCards />}
      {currentTab === "Renewable" && <RenewableTable title="Renewable" />}
      {currentTab === "Cancellation" && <CancellationTable title="Cancellation" />}
    </div>
  );
};

export default Subscription;
