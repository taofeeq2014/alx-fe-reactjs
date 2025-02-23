import UserInfo from './UserInfo';
function UserContext.Provider ({ userData })
function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
