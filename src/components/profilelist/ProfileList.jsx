import "./ProfileList.scss";
import { images } from "../../utils/images/images";

const ProfileList = ({ userList }) => {
  return (
    <div className="users_list">
      {userList &&
        userList.map((data) => {
          return (
            <div className="profile" key={data.id}>
              <img src={data.img} alt="avtar" />
            </div>
          );
        })}
    </div>
  );
};

export default ProfileList;
