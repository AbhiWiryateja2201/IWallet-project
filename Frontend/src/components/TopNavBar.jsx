import ProfileImage from '../assets/image/profile.png';

const TopNavBar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.fullName || "User";

  return (
    <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-end items-center px-container-margin z-40">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 ">
          <div className="text-right">
            <p className="font-label-md text-label-md font-bold">{userName}</p>
            <p className="text-[10px] text-secondary">Verified Member</p>
          </div>
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-primary-container"
            alt={`Professional portrait of ${userName}`}
            src={ProfileImage}
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
