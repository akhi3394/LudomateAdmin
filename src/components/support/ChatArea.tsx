import React from 'react';
import Message from './Message';

function ChatArea() {
    return (
        <div className=" p-5 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center mb-10">
                <div className="w-10 h-10 bg-[#C8C8C8] rounded-full flex items-center justify-center text-lg font-bold mr-3 my-2">
                    {"J"}
                </div>
                <div className="flex space-between w-full">
                    <div className="flex space-between">
                        <p className='flex flex-col text-start'>
                            <span className="text-sm font-semibold  ">{"John Smith, ID - #48564"}</span>
                            <span
                                className={`rounded-full text-xs text-start`}
                            >
                                {"ISSUE - Truck broke down"}
                            </span></p>

                    </div>


                </div>
                <div className="flex flex-col gap-5">
                    <p className='bg-[#AE6414] p-0.5 py-1 rounded-[11px] text-[#fff] text-center'>Driver</p>

                    <button className="bg-[#6F1AFF] text-right text-[#FFF] font-bold text-lg px-8 py-2 rounded-full text-sm">
                        Escalate
                    </button>
                </div>
            </div>
            <hr className='text-[#fff] w-full mb-3' />
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto pb-5">
                <Message
                    type="received"
                    content="The truck broke down near Exit 14. I'm waiting for roadside assistance."
                    timestamp="16:20 PM"
                />
                <Message
                    type="sent"
                    content="Noted. Do you need help raising a maintenance request?"
                    timestamp="16:23 PM"
                />
                <Message
                    type="received"
                    content="Yes please. This is the second time this week"
                    timestamp="16:24 PM"
                />
                <Message
                    type="sent"
                    content="Noted. Do you need help raising a maintenance request?"
                    timestamp="16:23 PM"
                />
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 border-none outline-none text-black text-sm  bg-white rounded-[11px] p-3 py-10"
                />
                <span className='bg-[#000] h-8 w-8 flex justify-center items-center rounded-[6px]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2199 21.6293C13.0399 21.6293 11.3699 20.7993 10.0499 16.8293L9.32988 14.6693L7.16988 13.9493C3.20988 12.6293 2.37988 10.9593 2.37988 9.77934C2.37988 8.60934 3.20988 6.92934 7.16988 5.59934L15.6599 2.76934C17.7799 2.05934 19.5499 2.26934 20.6399 3.34934C21.7299 4.42934 21.9399 6.20934 21.2299 8.32934L18.3999 16.8193C17.0699 20.7993 15.3999 21.6293 14.2199 21.6293ZM7.63988 7.02934C4.85988 7.95934 3.86988 9.05934 3.86988 9.77934C3.86988 10.4993 4.85988 11.5993 7.63988 12.5193L10.1599 13.3593C10.3799 13.4293 10.5599 13.6093 10.6299 13.8293L11.4699 16.3493C12.3899 19.1293 13.4999 20.1193 14.2199 20.1193C14.9399 20.1193 16.0399 19.1293 16.9699 16.3493L19.7999 7.85934C20.3099 6.31934 20.2199 5.05934 19.5699 4.40934C18.9199 3.75934 17.6599 3.67934 16.1299 4.18934L7.63988 7.02934Z" fill="white" />
                        <path d="M10.1098 14.4C9.9198 14.4 9.7298 14.33 9.5798 14.18C9.2898 13.89 9.2898 13.41 9.5798 13.12L13.1598 9.53C13.4498 9.24 13.9298 9.24 14.2198 9.53C14.5098 9.82 14.5098 10.3 14.2198 10.59L10.6398 14.18C10.4998 14.33 10.2998 14.4 10.1098 14.4Z" fill="white" />
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default ChatArea;