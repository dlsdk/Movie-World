import React from 'react'
import style from './Profile.module.css'
import LogoutDeleteButtons from 'components/LogoutDeleteButtons/LogoutDeleteButtons'
import ProfileImageUploader from 'components/ProfileImageUploader/ProfileImageUploader.js'
import ProfileForm from 'components/ProfileForm/ProfileForm'

export default function Profile() {
 
  
  return (
      <div className={style.profilediv}>
        <ProfileImageUploader/>
        <ProfileForm/>
        <LogoutDeleteButtons/>
      </div>

  )
}
