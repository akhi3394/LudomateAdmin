import { useState } from "react";

const languages = [
  {
    name: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "French",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "Spanish",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
  },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {/* {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-10"
        />
      )} */}

      {/* Trigger */}
      <div className="relative z-20 w-[170px] text-sm font-medium text-gray-700">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-white rounded-md "
        >
          <img
            src={
              languages.find((l) => l.name === selectedLanguage)?.flag ||
              languages[0].flag
            }
            alt="flag"
            className="w-5 h-5 object-cover rounded-sm"
          />
          <span>{selectedLanguage}</span>

          <svg
            className="ml-auto"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="#555" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute mt-2 w-[220px] bg-white rounded-lg shadow-md border border-gray-200 z-30">
            <p className="px-4 pt-3 pb-2 text-[13px] text-gray-800 font-semibold border-b border-gray-200">
              Select Language
            </p>
            <div className="py-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  onClick={() => {
                    setSelectedLanguage(lang.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedLanguage === lang.name ? "font-medium" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-5 h-5 rounded-sm object-cover"
                    />
                    <span className="text-sm text-gray-800">{lang.name}</span>
                  </div>

                  {selectedLanguage === lang.name && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageDropdown;
