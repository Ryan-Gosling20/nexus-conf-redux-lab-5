import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({ children, onClick, variant = 'primary', disabled = false, type = 'button' }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'ghost']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
