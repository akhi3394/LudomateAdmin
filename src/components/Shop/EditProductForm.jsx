import React, { useState, useEffect } from "react";

const EditProductForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: product.title || "",
    price: product.price || "",
    category: "",
    offerPrice: "",
  });
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setFormData({
      name: product.title || "",
      price: product.price || "",
      category: "",
      offerPrice: "",
    });
  }, [product]);

  useEffect(() => {
    const isFormChanged =
      formData.name !== product.title ||
      formData.price !== product.price ||
      formData.category !== "" ||
      formData.offerPrice !== "";
    setIsChanged(isFormChanged);
  }, [formData, product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // API call will be added later
    console.log("Saving:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <button className="text-blue-500 text-sm">Upload Product Photo</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price*</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Product Category*</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="">Select Product Category</option>
            <option value="dice">Dice</option>
            <option value="avatar">Avatars</option>
            <option value="board">Boards</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Offer Price (if any)</label>
          <input
            type="number"
            name="offerPrice"
            value={formData.offerPrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button
          onClick={handleSave}
          disabled={!isChanged}
          className={`mt-6 px-4 py-2 bg-blue-500 text-white rounded ${!isChanged ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProductForm;