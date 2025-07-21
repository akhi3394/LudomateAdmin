const ProductCard = ({ title, image, price = '₹399', isDefault }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 w-full">
            <div className="relative w-[100px] h-[100px] rounded-xl border-2 border-[#FFA726] bg-gradient-to-br from-[#5A00E2] to-[#A31FE4] flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="w-[60px] h-[60px] object-contain"
                />
            </div>

            <p className="text-xs font-semibold text-[#1B1E25] text-center">{title}</p>

            {!isDefault && (
                <p className="text-green-500 text-sm font-bold">{price}</p>
            )}

            <div className="flex gap-2">
                <button className="bg-[#E9F1FF] p-1.5 rounded-md">
                    <img src="/download.svg" alt="Download" className="w-4 h-4" />
                </button>
                <button className="bg-[#E9F1FF] p-1.5 rounded-md">
                    <img src="/edit.svg" alt="Edit" className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};


export default ProductCard;
