import React, { useState } from "react";

const CustomTable = ({
  columns = [],
  data = [],
  className = "",
  headerBg = "#131060",
  cellHeight = "h-16",
  border = "border-t border-white/20",
  headerClassName = "",
  tooltipContentRenderer = null,
  popupContentRenderer = null,
  cellStyleRenderer = null,
  cellRenderer = null,
  tooltipStyle = {},
}) => {
  const [tooltipState, setTooltipState] = useState({
    open: false,
    content: null,
    pos: { top: 0, left: 0 },
  });

  const [popupState, setPopupState] = useState({
    open: false,
    content: null,
  });

  const closeTooltip = () => setTooltipState((prev) => ({ ...prev, open: false }));
  const closePopup = () => setPopupState({ open: false, content: null });

  const handleCellClick = (row, col, event) => {
    if (!col.isAction || !tooltipContentRenderer) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipWidth = 120; // same as your tooltip width
    const horizontalOffset = rect.left + rect.width / 2 - tooltipWidth / 2;
    const left = Math.max(8, Math.min(horizontalOffset, window.innerWidth - tooltipWidth - 8));

    const position = {
      top: rect.bottom, // no gap between cell and tooltip
      left,
    };


    const content = tooltipContentRenderer(row, col, {
      onAction: (actionType) => {
        if (popupContentRenderer) {
          const popupContent = popupContentRenderer({
            row,
            type: actionType,
            closePopup,
          });
          setPopupState({ open: true, content: popupContent });
        }
        closeTooltip();
      },
    });

    setTooltipState({ open: true, content, pos: position });
  };

  return (
    <div className={`w-full rounded-xl ${className}`}>
      <div className="relative w-full overflow-x-auto rounded-lg">
        <table className="text-white text-sm border-collapse rounded-t-lg table-fixed w-full">
          <thead>
            <tr className={`h-14 text-left ${headerClassName}`} style={{ backgroundColor: headerBg }}>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-3 font-medium whitespace-nowrap"
                  style={{ width: col.width || `${100 / columns.length}%` }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`${border} ${cellHeight} hover:bg-white/5 transition-colors`}
                >
                  {columns.map((col, idx) => (
                    <td
                      key={idx}
                      className={`px-4 py-3 whitespace-nowrap truncate ${col.isAction ? "cursor-pointer" : ""} ${cellStyleRenderer ? cellStyleRenderer(row, col) : ""
                        }`}
                      onClick={(event) => handleCellClick(row, col, event)}
                    >
                      {cellRenderer ? cellRenderer(row, col) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className={`px-4 py-6 text-center text-white/50 ${cellHeight}`}
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tooltip */}
      {tooltipState.open && (
        <>
          <div
            className="fixed z-50 text-white text-sm rounded-lg shadow-lg transition-opacity"
            style={{
              top: `${tooltipState.pos.top}px`,
              left: `${tooltipState.pos.left}px`,
            
              ...tooltipStyle,
            }}
          >
            {tooltipState.content}
          </div>

          <div className="fixed inset-0 z-40" onClick={closeTooltip} />
        </>
      )}

      {/* Popup */}
      {popupState.open && (
        <>
          <div className="fixed z-50 bg-[#1A1A7D] text-white p-4 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-[90vw] max-h-[90vh] overflow-auto">
            {popupState.content}
          </div>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closePopup} />
        </>
      )}
    </div>
  );
};

export default CustomTable;
