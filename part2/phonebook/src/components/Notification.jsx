const Notification = ({ messageText, statusType }) => {
  const statusTypeClass =
    statusType === "info" ? "info" : statusType === "error" ? "error" : null;

  if (messageText === null) {
    return;
  }

  return (
    <div className={"notification" + " " + statusTypeClass}>{messageText}</div>
  );
};

export default Notification;
