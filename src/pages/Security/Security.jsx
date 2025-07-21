import React, { useState } from "react";
import GoogleAuthIcon from "/Security/googleAuthenticator.svg";
import EmailIcon from "/Security/email.svg";
import SmsIcon from "/Security/sms.svg";
import ActionIcon from "../../../public/tableAction.svg";
import CustomPagination from "../../hooks/CustomPagination";
import IssueCard from "../../components/security/IssueCard";
import AuditLogTable from "../../components/security/AuditLogTable";
import FraudAlertTable from "../../components/security/FraudAlertTable";

const TwoFactorAuth = () => {
  const [enabled, setEnabled] = useState(false);
  const [method, setMethod] = useState("google");
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const methodLabel = {
    google: "Google Authenticator",
    email: "Email OTP",
    sms: "SMS Authentication",
  };

  const methodIcons = {
    google: GoogleAuthIcon,
    email: EmailIcon,
    sms: SmsIcon,
  };

  const CheckmarkIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 0.5C18.8513 0.5 24 5.64873 24 12C24 18.3513 18.8513 23.5 12.5 23.5C6.14873 23.5 1 18.3513 1 12C1 5.64873 6.14873 0.5 12.5 0.5Z" stroke="#009951" />
      <path d="M10.17 16.17L5.5 11L6.59 9.91L10.17 13.49L18.41 5.25L19.5 6.34L10.17 15.67Z" fill="#009951" />
    </svg>
  );

  const LockIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 10.75C18.09 10.75 17.75 10.41 17.75 10V8C17.75 4.85 16.86 2.75 12.5 2.75C8.14 2.75 7.25 4.85 7.25 8V10C7.25 10.41 6.91 10.75 6.5 10.75C6.09 10.75 5.75 10.41 5.75 10V8C5.75 5.1 6.45 1.25 12.5 1.25C18.55 1.25 19.25 5.1 19.25 8V10C19.25 10.41 18.91 10.75 18.5 10.75Z" fill="#EDEDED" />
      <path d="M12.5 19.25C10.71 19.25 9.25 17.79 9.25 16C9.25 14.21 10.71 12.75 12.5 12.75C14.29 12.75 15.75 14.21 15.75 16C15.75 17.79 14.29 19.25 12.5 19.25ZM12.5 14.25C11.54 14.25 10.75 15.04 10.75 16C10.75 16.96 11.54 17.75 12.5 17.75C13.46 17.75 14.25 16.96 14.25 16C14.25 15.04 13.46 14.25 12.5 14.25Z" fill="#EDEDED" />
      <path d="M17.5 22.75H7.5C3.09 22.75 1.75 21.41 1.75 17V15C1.75 10.59 3.09 9.25 7.5 9.25H17.5C21.91 9.25 23.25 10.59 23.25 15V17C23.25 21.41 21.91 22.75 17.5 22.75ZM7.5 10.75C3.92 10.75 3.25 11.43 3.25 15V17C3.25 20.57 3.92 21.25 7.5 21.25H17.5C21.08 21.25 21.75 20.57 21.75 17V15C21.75 11.43 21.08 10.75 17.5 10.75H7.5Z" fill="#EDEDED" />
    </svg>
  );

  const WarningIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#E6A000" />
      <path d="M12 17.2492C11.73 17.2492 11.48 17.1493 11.29 16.9593C11.2 16.8593 11.13 16.7492 11.07 16.6292C11.02 16.5092 11 16.3792 11 16.2492C11 15.9892 11.11 15.7292 11.29 15.5392C11.66 15.1692 12.34 15.1692 12.71 15.5392C12.89 15.7292 13 15.9892 13 16.2492C13 16.3792 12.97 16.5092 12.92 16.6292C12.87 16.7492 12.8 16.8593 12.71 16.9593C12.52 17.1493 12.27 17.2492 12 17.2492Z" fill="#E6A000" />
      <path d="M12.0002 22.7491C11.3302 22.7491 10.6502 22.5791 10.0502 22.2291L4.11017 18.7991C2.91017 18.0991 2.16016 16.8091 2.16016 15.4191V8.57914C2.16016 7.18914 2.91017 5.89913 4.11017 5.19913L10.0502 1.76914C11.2502 1.06914 12.7402 1.06914 13.9502 1.76914L19.8902 5.19913C21.0902 5.89913 21.8402 7.18914 21.8402 8.57914V15.4191C21.8402 16.8091 21.0902 18.0991 19.8902 18.7991L13.9502 22.2291C13.3502 22.5791 12.6702 22.7491 12.0002 22.7491ZM12.0002 2.74912C11.5902 2.74912 11.1702 2.85913 10.8002 3.06913L4.86017 6.49912C4.12017 6.92912 3.66016 7.71914 3.66016 8.57914V15.4191C3.66016 16.2691 4.12017 17.0691 4.86017 17.4991L10.8002 20.9291C11.5402 21.3591 12.4602 21.3591 13.1902 20.9291L19.1302 17.4991C19.8702 17.0691 20.3302 16.2791 20.3302 15.4191V8.57914C20.3302 7.72914 19.8702 6.92912 19.1302 6.49912L13.1902 3.06913C12.8302 2.85913 12.4102 2.74912 12.0002 2.74912Z" fill="#E6A000" />
    </svg>
  );

  const UserConsentTable = () => {
    const columns = [
      { header: "User", accessor: "user", width: "33%" },
      { header: "Consent Type", accessor: "consentType", width: "33%" },
      { header: "Date Given", accessor: "dateGiven", width: "33%" },
    ];

    const data = [
      { user: "John Smith", consentType: "Cookies", dateGiven: "07/06/2025" },
      { user: "John Smith", consentType: "Marketing", dateGiven: "07/06/2025" },
      { user: "John Smith", consentType: "Location", dateGiven: "07/06/2025" },
    ];

    return (
      <div className="w-full rounded-xl bg-[#070539] overflow-x-auto">
        <table className="text-white text-sm border-collapse rounded-t-lg w-full min-w-[350px]">
          <thead>
            <tr className="h-14 text-left" style={{ backgroundColor: "#070539" }}>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-medium whitespace-nowrap"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-t border-[#FFFFFF] h-16 hover:bg-white/5 transition-colors"
                >
                  {columns.map((col, idx) => (
                    <td key={idx} className="px-4 py-3 whitespace-nowrap truncate">
                      {row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 py-6 text-center text-white/50 h-16">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const DataDeletionTable = () => {
    const columns = [
      { header: "Request ID", accessor: "requestId", width: "33%" },
      { header: "User", accessor: "user", width: "33%" },
      { header: "Date", accessor: "date", width: "33%" },
    ];

    const data = [
      { requestId: "#12345", user: "John Smith", date: "07/06/2025" },
      { requestId: "#67890", user: "John Smith", date: "07/06/2025" },
      { requestId: "#54321", user: "John Smith", date: "07/06/2025" },
    ];

    return (
      <div className="w-full rounded-xl bg-[#070539] overflow-x-auto">
        <table className="text-white text-sm border-collapse rounded-t-lg w-full min-w-[350px]">
          <thead>
            <tr className="h-14 text-left" style={{ backgroundColor: "#070539" }}>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-medium whitespace-nowrap"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-t border-[#FFFFFF] h-16 hover:bg-white/5 transition-colors"
                >
                  {columns.map((col, idx) => (
                    <td key={idx} className="px-4 py-3 whitespace-nowrap truncate">
                      {row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 py-6 text-center text-white/50 h-16">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };


  return (
    <div className="pt-4">
      <h2 className="font-semibold text-[22px] text-white leading-[33px] mb-4">
        Two-Factor Authentication (2FA)
      </h2>
      <div className="w-full rounded-lg bg-[#131060] p-6 text-white font-poppins">
        <div className="w-full rounded-[6px] border border-white p-4 flex flex-col gap-[14px]">
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-medium leading-[24px]">
              Enable Two-Factor Authentication (2FA) for login
            </span>
            <div
              className={`w-[51px] h-[31px] rounded-full cursor-pointer transition-colors ${
                enabled ? "bg-[#34C759]" : "bg-gray-500"
              }`}
              onClick={() => setEnabled((prev) => !prev)}
            >
              <div
                className={`w-[23px] h-[23px] bg-white rounded-full mt-[4px] transition-all ${
                  enabled ? "ml-[24px]" : "ml-[4px]"
                }`}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-base font-medium leading-[24px] mb-2">2FA Method</p>
            <div className="flex items-center justify-start gap-[10px]">
              <div className="flex items-center gap-[13px] w-[242px] h-[40px] pl-2 py-2 border border-white rounded-[6px]">
                <img
                  src={methodIcons[method]}
                  alt={method}
                  className="w-6 h-6 bg-[#fff] rounded-full"
                />
                <span className="text-[16px] font-medium leading-[24px]">
                  {methodLabel[method]}
                </span>
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm underline text-white font-medium"
              >
                Change
              </button>
            </div>
            {expanded && (
              <div className="mt-4 flex gap-4 pt-4 border-t border-[#7B7B7B]">
                {["google", "email", "sms"]
                  .filter((type) => type !== method)
                  .map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-[10px] border border-white/50 px-4 py-2 rounded-[6px] cursor-pointer"
                      onClick={() => {
                        setMethod(type);
                        setExpanded(false);
                      }}
                    >
                      <img
                        src={methodIcons[type]}
                        alt={type}
                        className="w-6 h-6 bg-[#fff] rounded-full"
                      />
                      <span className="text-base font-medium leading-[24px]">
                        {methodLabel[type]}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="font-semibold text-[22px] text-white leading-[33px] mt-8 mb-4">
          Data Encryption & Secure Storage
        </h2>
        <div className="w-full md:w-1/2 rounded-lg bg-[#131060] font-poppins">
          <div className="rounded-[6px] border border-[#1A1A7D] p-4 flex flex-col gap-4">
            <div className="text-[16px] text-white/70">Data Protection Overview</div>
            <div className="border-t border-[#CDCDCD]"></div>
            <div className="flex items-center gap-3 bg-[#1A1A7D] p-3 rounded-md">
              <LockIcon />
              <span className="text-[16px] font-medium text-white">
                All data is encrypted using AES-256 and TLS 1.3 protocol
              </span>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
                <div className="flex flex-col gap-4">
                  {[
                    { label: "In Transit:", value: "Encrypted via TLS 1.3" },
                    { label: "At Rest:", value: "Encrypted using AES-256" },
                    { label: "Certificate:", value: "Valid" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <CheckmarkIcon />
                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-6">
                        <span className="text-[16px] font-bold text-white min-w-[100px]">
                          {item.label}
                        </span>
                        <span className="text-[16px] text-white">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-0">
        <h2 className="font-semibold text-[22px] text-white leading-[33px] mt-8 mb-4">
          GDPR & Industry Compliance Standards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] font-poppins">
          <div className="rounded-[16px] border border-[#1A1A7D] bg-[#131060] p-4 flex flex-col gap-4">
            <div className="text-[16px] text-[#EFEFEF] font-medium">Compliance Check List</div>
            <div className="border-t border-[#CDCDCD]"></div>
            <div className="flex items-center gap-3">
              <CheckmarkIcon />
              <span className="text-[16px] font-medium text-white">Privacy Policy in place</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckmarkIcon />
              <span className="text-[16px] font-medium text-white">Consent Management Active</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckmarkIcon />
              <span className="text-[16px] font-medium text-white">
                Audit Log Retention Configured
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckmarkIcon />
              <span className="text-[16px] font-medium text-white">
                Two Factor Authentication Enabled
              </span>
            </div>
          </div>
          <div className="rounded-[16px] border border-[#1A1A7D] bg-[#131060] p-4 flex flex-col gap-4">
            <div className="text-[16px] text-[#EFEFEF] font-medium">User Consent Record</div>
            <div className="border-t border-[#CDCDCD]"></div>
            <UserConsentTable />
          </div>
          <div className="rounded-[16px] border border-[#1A1A7D] bg-[#131060] p-4 flex flex-col gap-4">
            <div className="text-[16px] text-[#EFEFEF] font-medium">
              Privacy Policy & Terms Update
            </div>
            <div className="mb-2 border-t border-[#CDCDCD]"></div>
            <div className="flex items-center gap-3">
              <span className="text-[16px] font-medium text-white mb-2">
                Last Update: 24/04/2025
              </span>
            </div>
            <div className="flex items-center gap-3">
              <WarningIcon />
              <span className="text-[16px] font-medium text-white">Update Recommended</span>
            </div>
          </div>
          <div className="rounded-[16px] border border-[#1A1A7D] bg-[#131060] p-4 flex flex-col gap-4">
            <div className="text-[16px] text-[#EFEFEF] font-medium">
              Data Deletion Request
            </div>
            <div className="border-t border-[#CDCDCD]"></div>
            <DataDeletionTable />
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <h2 className="font-semibold text-[22px] text-white leading-[33px] mb-4">
          Audit Logs
        </h2>
        <div>
          <AuditLogTable />
          <div className="flex justify-between items-center mt-4">
            <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <h2 className="font-semibold text-[22px] text-white leading-[33px] mb-4">
          Fraud Alerts
        </h2>
        <div>
          <FraudAlertTable />
          <div className="flex justify-between items-center mt-4">
            <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;