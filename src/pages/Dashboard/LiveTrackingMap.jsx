import React, { useState } from "react";

const companies = ["Company A", "Company B", "Company C"];

const LiveTrackingMap = () => {
    const [selectedCompany, setSelectedCompany] = useState("Company A");

    return (
        <><h2 className="text-white text-[22px] font-semibold mb-2">Live Tracking Map</h2>
        <div className=" rounded-xl  w-full">

            <div className="bg-[#131060] rounded-t-md p-4">
                <label className="text-white text-[16px] mr-5">Monitor Shipment of</label>
                <select
                    className="bg-white w-[244px] h-[56px] text-black rounded-md px-4 py-2 focus:outline-none"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                >
                    {companies.map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full h-[500px] overflow-hidden">
                <iframe
                    title="Live Tracking Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div></>
    );
};

export default LiveTrackingMap;
