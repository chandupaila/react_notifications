function Notification(props) {
  const { className, iconUrl, message } = props;
  const className_Container = `container ${className}`;
  return (
    <div className={className_Container}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>

    <div className="notification-container">
      <Notification
        className="bg-primary"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information message"
      />

      <Notification
        className="bg-success"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Information message"
      />

      <Notification
        className="bg-warning"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Information message"
      />

      <Notification
        className="bg-danger"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Information message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
