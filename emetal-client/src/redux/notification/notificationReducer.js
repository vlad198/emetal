const {
  ADD_NOTIFICATION,
  FILTER_NOTIFICATIONS,
} = require("./notificationTypes");

const initialState = {
  notifications: [],
};

const reducer = (state = initialState, { type, payload }) => {
  console.log("notifications " + state.notifications);
  switch (type) {
    case FILTER_NOTIFICATIONS:
      return {
        notifications: state.notifications.filter(
          (notification) => notification.date + 30 > Date.now()
        ),
      };
    case ADD_NOTIFICATION:
      return {
        notifications: [...state.notifications, payload],
      };
    default:
      return state;
  }
};

export default reducer;
