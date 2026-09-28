import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoriteIds, toggleFavorite } from '../../store/favoritesSlice.js'
import styles from './SpeakerCard.module.css'

function SpeakerCard({ id, name, role, talk, time, room, initials, accent = 'violet' }) {
  const dispatch = useDispatch()
  const isFavorite = useSelector((state) => selectFavoriteIds(state).includes(id))

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id))
  }

  return (
    <article className={`${styles.card} ${isFavorite ? styles.favorite : ''}`}>
      <div className={`${styles.avatar} ${styles[accent]}`} aria-hidden="true">{initials}</div>
      <div className={styles.body}>
        <p className={styles.role}>{role}</p>
        <h3>{name}</h3>
        <p className={styles.talk}>«{talk}»</p>
        <div className={styles.meta}><span>{time}</span><span>{room}</span></div>
        <button
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
          type="button"
          aria-pressed={isFavorite}
          onClick={handleFavoriteClick}
        >
          <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
          {isFavorite ? 'В избранном' : 'Добавить в избранное'}
        </button>
      </div>
    </article>
  )
}

SpeakerCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  talk: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  accent: PropTypes.oneOf(['coral', 'blue', 'violet']),
}

export default SpeakerCard
