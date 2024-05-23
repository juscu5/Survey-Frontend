import React from 'react'
import './Notification.scss'
import { useDispatch } from "react-redux";
import { messageNotif } from '../../../services/Message';
import { useSelector } from 'react-redux';

const message = {
  status: false,
  message: "",
} 

export const NotificationSuccess = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="notification is-success" onClick={() => messageNotif(dispatch, message)}>
        <button className="delete"/>
        <div {...props}>

        </div>
    </div>
  )
}

export const NotificationDanger = (props) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.notifMessageReducer.message.status);
  return (
    <div className={status === true ? "notification is-danger true" : "notification is-danger false"} onClick={() => messageNotif(dispatch, message)}>
        <button className="delete"/>
        <div {...props}>
        </div>
    </div>
  )
}

