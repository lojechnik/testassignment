import React from 'react'
import styles from './user.module.css'
import { userType } from './usertype';
type UserProps = {
  user: userType;
}
function User(userdata: UserProps) {
  console.log('userName1', userdata)
  return (<div className={styles.user}>
    <div className={styles.user__id}></div>
    <div className={styles.user__name}>
      <div className={styles.username_first}>{userdata.user.first_name !== "" ?  userdata.user.first_name : userdata.user.username}</div>
      <div className="user-name__last">{userdata.user.last_name}</div>
    </div>
  </div>);
}

export default User