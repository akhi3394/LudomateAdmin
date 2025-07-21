import React from 'react';
import LabelBadge from './LabelBadge';
import { FiStar, FiTrash2 } from 'react-icons/fi';

const MessageItem = ({ name, message, time, label, starred }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 text-sm">
      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <FiStar className={`text-yellow-400 ${starred ? 'fill-yellow-400' : ''}`} />
        <span className="font-medium">{name}</span>
        {label && <LabelBadge label={label} />}
        <span className="text-gray-500 truncate max-w-[200px]">{message}</span>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
};

export default MessageItem;
