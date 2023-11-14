import React from 'react'
import { userType } from './usertype';
type UserProps = {
  user: userType;
}
function User(userdata: UserProps) {
  console.log('userName1', userdata.user.first_name)
  return (<div className="user">
    <div className="id"></div>
    <div className="user-name">
      <div className="user-name__first">{userdata.user.first_name}</div>
      <div className="user-name__last">{userdata.user.last_name}</div>
    </div>
  </div>);
}

export default User