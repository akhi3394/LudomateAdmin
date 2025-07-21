import React from 'react';

function Message({ type, content, timestamp }) {
    return (
        <div className={`mb-4 flex flex-col ${type === 'sent' ? 'items-end' : 'items-start'}`}>
            <div
                className={`p-3 rounded-lg text-sm max-w-[60%] ${type === 'sent' ? 'bg-[#C7E5FF] text-[#000000]' : 'bg-[#E9E9E9] text-[#000000]'
                    }`}
            >
                {content}
            </div>
            <div className="text-xs text-gray-400 mt-1">{timestamp}</div>
        </div>
    );
}

export default Message;