import React from 'react';
import ConversationItem from './ConversationItem';

function Sidebar() {
    return (
        <div className=" border-r border-white/10">
            <div className="p-5">
                <h2 className="text-base font-bold">Active Conversation</h2>
                <p className='text-[#fff] text-[10px] mb-4'>Recent Support Conversation</p>
            </div>
            <div className="px-5 bg-[#161A4D] py-2">
                <ConversationItem name="John Smith" tag="Driver" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Company" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Driver" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Company" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Driver" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Driver" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Company" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
            <div className="px-5">
                <ConversationItem name="John Smith" tag="Driver" />
            </div>
            <hr className='text-[#868686!important] w-full px-0!important py-2' />
        </div>
    );
}

export default Sidebar;