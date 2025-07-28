import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import EditProductForm from './EditProductForm'; // Assuming this will be created

const ProductCard = ({ title, image, price = '', isDefault }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <p className="text-xs font-semibold text-[#1B1E25] text-center">{title}</p>

      <div className="relative w-[100px] h-[100px] rounded-xl border-2 border-[#FFA726] bg-gradient-to-br from-[#5A00E2] to-[#A31FE4] flex flex-col items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[60px] h-[60px] object-contain"
        />
        {!isDefault && price && (
          <p className="text-green-500 text-sm font-bold mt-1">₹{price}</p>
        )}
      </div>

      <div className="flex gap-2 cursor-pointer">
        {isDefault ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_346_886)">
              <path d="M15.8927 15.8935C16.3075 15.8935 16.7052 15.7287 16.9985 15.4355C17.2918 15.1422 17.4565 14.7444 17.4565 14.3297V6.51061C17.4565 6.09586 17.2918 5.6981 16.9985 5.40483C16.7052 5.11156 16.3075 4.9468 15.8927 4.9468H9.71563C9.45409 4.94936 9.19609 4.88629 8.96523 4.76335C8.73438 4.64041 8.53804 4.46153 8.3942 4.24308L7.76086 3.30479C7.61847 3.08857 7.42462 2.91108 7.19671 2.78826C6.96881 2.66544 6.71397 2.60112 6.45507 2.60107H3.38218C2.96743 2.60107 2.56966 2.76583 2.27639 3.05911C1.98312 3.35238 1.81836 3.75014 1.81836 4.16489V14.3297C1.81836 14.7444 1.98312 15.1422 2.27639 15.4355C2.56966 15.7287 2.96743 15.8935 3.38218 15.8935H15.8927Z" stroke="#4880FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.6377 8.07446V12.7659" stroke="#4880FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.29199 10.4202L9.63772 8.07446L11.9834 10.4202" stroke="#4880FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_346_886">
                <rect width="18.7658" height="18.7658" fill="white" transform="translate(0.254883 0.255371)" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <FiEdit size={15} color="blue" onClick={handleEditClick} />
        )}
      </div>

      {isEditing && (
        <EditProductForm
          product={{ title, price, category: '' }} // Default category as empty for now
          onClose={handleCloseEdit}
        />
      )}
    </div>
  );
};

export default ProductCard;