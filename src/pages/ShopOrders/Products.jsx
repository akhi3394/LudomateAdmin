import React from 'react';
import ProductCard from '../../components/Shop/ProductCard';

const Products = () => {
    return (
        <>
            <h2 className="text-lg font-semibold text-[#1B1E25] mb-6">DICE</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full">
                {[...Array(9)].map((_, idx) => (
                    <ProductCard
                        key={idx}
                        title={idx === 0 ? 'DEFAULT' : `DICE ${idx + 1}`}
                        isDefault={idx === 0}
                        image="/your-image-url.svg"
                    />
                ))}
            </div>


        </>
    );
};

export default Products;
