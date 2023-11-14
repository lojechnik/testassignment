import React from 'react'
type AuthPopUpProps = {
    authed:boolean;
}
function  AuthPopUp(props:AuthPopUpProps) {
    if (props.authed)
  return (
    <div>pogChamp</div>
  ) ; else return (
    <div className="">dansGame</div>
  )
}
export default AuthPopUp