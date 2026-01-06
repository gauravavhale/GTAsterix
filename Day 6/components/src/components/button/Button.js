const Button = ({ label, type = "button", onClick, variant = "primary" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${variant}`}>
      {label}
    </button>
  );
};

window.Button = Button;