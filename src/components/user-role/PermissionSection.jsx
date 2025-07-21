const PermissionSection = ({ title, permissions = [] }) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <p className="text-[16px] font-medium mb-2">{title}</p>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="form-checkbox accent-[#65558F] h-5 w-5 bg-[#26255B] border-[#3A3970] rounded transition duration-150"
          />
          <p>All</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mb-2">
        {permissions.map((perm) => (
          <div className="flex gap-2" key={perm}>
            <input
              type="checkbox"
              className="form-checkbox accent-[#65558F] h-5 w-5 bg-[#26255B] border-[#3A3970] rounded transition duration-150"
            />
            <p>{perm}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionSection;
