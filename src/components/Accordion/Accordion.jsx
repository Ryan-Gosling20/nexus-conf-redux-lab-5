import { useId, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Accordion.module.css'

function Accordion({ question, answer, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const contentId = useId()

  return (
    <article className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{question}</span><span className={styles.icon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={styles.content} id={contentId} hidden={!isOpen}><p>{answer}</p></div>
    </article>
  )
}

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  initiallyOpen: PropTypes.bool,
}

export default Accordion
