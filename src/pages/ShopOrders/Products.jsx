import React from 'react';
import ProductCard from '../../components/Shop/ProductCard';
import {
  useGetAllDiceQuery,
  useGetAllAvatarsQuery,
  useGetAllBoardsQuery,
} from '../../redux/slices/apiSlice';

const Products = () => {
  const { data: diceData, isLoading: isDiceLoading, error: diceError } = useGetAllDiceQuery();
  const { data: avatarsData, isLoading: isAvatarsLoading, error: avatarsError } = useGetAllAvatarsQuery();
  const { data: boardsData, isLoading: isBoardsLoading, error: boardsError } = useGetAllBoardsQuery();

  const sectionClass = "bg-white rounded-lg p-6 mb-8 shadow";
  const gridClass = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full";

  return (
    <div className="2xl:max-w-screen-lg lg:max-w-screen-md">
      {/* Dice Section */}
      <div className={sectionClass}>
        <h2 className="text-sm font-semibold text-[#1B1E25] mb-4 uppercase">DICE</h2>
        {isDiceLoading ? (
          <div>Loading dice...</div>
        ) : diceError ? (
          <div>Error loading dice: {diceError.message}</div>
        ) : (
          <div className={gridClass}>
            {diceData?.data?.map((dice) => (
              <ProductCard
                key={dice._id}
                title={dice.name}
                isDefault={dice.default}
                image={dice.image}
                price={dice.price}
              />
            ))}
          </div>
        )}
      </div>

      {/* Avatars Section */}
      <div className={sectionClass}>
        <h2 className="text-sm font-semibold text-[#1B1E25] mb-4 uppercase">Avatars</h2>
        {isAvatarsLoading ? (
          <div>Loading avatars...</div>
        ) : avatarsError ? (
          <div>Error loading avatars: {avatarsError.message}</div>
        ) : (
          <div className={gridClass}>
            {avatarsData?.data?.map((avatar) => (
              <ProductCard
                key={avatar._id}
                title={avatar.name}
                isDefault={avatar.default}
                image={avatar.image}
                price={avatar.price}
              />
            ))}
          </div>
        )}
      </div>

      {/* Boards Section */}
      <div className={sectionClass}>
        <h2 className="text-sm font-semibold text-[#1B1E25] mb-4 uppercase">Boards</h2>
        {isBoardsLoading ? (
          <div>Loading boards...</div>
        ) : boardsError ? (
          <div>Error loading boards: {boardsError.message}</div>
        ) : (
          <div className={gridClass}>
            {boardsData?.data?.map((board) => (
              <ProductCard
                key={board._id}
                title={board.name}
                isDefault={false}
                image={board.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;