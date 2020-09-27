import { FILTER_NOTIFICATIONS, ADD_NOTIFICATION } from "./notificationTypes";

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});

export const filterNotification = () => ({
  type: FILTER_NOTIFICATIONS,
});
