import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border border-gray-300 rounded-lg mb-2">
            <button
                onClick={toggleOpen}
                className="w-full flex justify-between items-center p-4 text-left text-white font-medium focus:outline-none"
            >
                <span>{question}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="#FFF"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-200 text-sm">
                    {answer}
                </div>
            )}
        </div>
    );
};

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do I reset my password?",
            answer: "Go to the Login Page. → Click on “Forgot Password?” → Enter your registered email address. → Check your inbox for a password reset link → Click the link and follow the instructions to set a new password."
        },
        {
            question: "How do I reset my password?",
            answer: "Go to the Login Page. → Click on “Forgot Password?” → Enter your registered email address. → Check your inbox for a password reset link → Click the link and follow the instructions to set a new password."
        },
        {
            question: "How do I reset my password?",
            answer: "Go to the Login Page. → Click on “Forgot Password?” → Enter your registered email address. → Check your inbox for a password reset link → Click the link and follow the instructions to set a new password."
        },
        {
            question: "How do I reset my password?",
            answer: "Go to the Login Page. → Click on “Forgot Password?” → Enter your registered email address. → Check your inbox for a password reset link → Click the link and follow the instructions to set a new password."
        },
        {
            question: "How do I reset my password?",
            answer: "Go to the Login Page. → Click on “Forgot Password?” → Enter your registered email address. → Check your inbox for a password reset link → Click the link and follow the instructions to set a new password."
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
            <><h2 className="text-xl font-semibold text-white mb-5 mt-3">Support FAQ</h2><div className="mx-auto bg-[#131060] p-5 m-5 rounded-[11px]">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggleOpen={() => toggleFAQ(index)} />
            ))}
        </div></>
    );
};
