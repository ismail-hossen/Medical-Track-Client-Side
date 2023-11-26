const Button = ({ label, className, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          rounded-lg
          hover:opacity-80
          transition
          ${className}
        `}
    >
      {label}
    </button>
  );
};

export default Button;
