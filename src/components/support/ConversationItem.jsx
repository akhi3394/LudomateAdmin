import React from 'react';

function ConversationItem({ name, tag }) {
    return (
        <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-[#C8C8C8] rounded-full flex items-center justify-center text-lg font-bold mr-3 my-2">
                {name[0]}
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold  ">{name}</span>
                <span className='text-[10px]'>Thanks for quick response</span>
                <span
                    className={`rounded-full text-xs text-center w-[70px] ${tag === 'Driver' ? 'bg-[#AE6414]' : 'bg-[#14AE7D]'
                        }`}
                >
                    {tag}
                </span>
            </div>

        </div>
    );
}

export default ConversationItem;