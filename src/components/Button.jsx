import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.any,
  type: PropTypes.any.isRequired,
};

export default Button;
