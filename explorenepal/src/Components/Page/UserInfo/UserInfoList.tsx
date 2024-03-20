// UserInfoList.tsx
import  { useEffect, useState } from "react";
import { UserInfoModel } from "../../../Interfaces";
import UserInfo from "./UserInfo";

function UserInfoList() {
    const [userInfoItems, setUserInfoItems] = useState<UserInfoModel[]>([]);

    useEffect(() => {
        fetch("https://localhost:7173/api/UserInfo") // Update with your actual API endpoint
            .then((response) => response.json())
            .then((data: UserInfoModel[]) => {
                console.log(data);
                setUserInfoItems(data);
            })
            .catch((error) => {
                console.error("Error fetching user info:", error);
            });
    }, []);

    return (
        <div className="container row">
            {userInfoItems.length >0 &&
            userInfoItems.map((userinfo, index) => (
                <UserInfo userInfo={userinfo} key={index} />
            ))}
        </div>
    );
}

export default UserInfoList;
