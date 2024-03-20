// UserInfo.tsx
import React from 'react';
import { UserInfoModel } from '../../../Interfaces'; // Assuming UserInfoModel is defined in a separate file named 'types'

interface Props {
  userInfo: UserInfoModel;
}

const UserInfo: React.FC<Props> = ({ userInfo }) => {
  return (
    <div>
      <p>ID: {userInfo.id}</p>
      <p>Full Name: {userInfo.fullName}</p>
      <p>Email: {userInfo.email}</p>
      <p>Phone Number: {userInfo.phoneNumber}</p>
      <p>Additional Text: {userInfo.additionalText}</p>
    </div>
  );
};

export default UserInfo;
