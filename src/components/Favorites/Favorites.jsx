import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearFavorites,
  selectFavoriteIds,
  selectFavoritesCount,
} from '../../store/favoritesSlice.js'
import styles from './Favorites.module.css'

function Favorites({ speakers }) {
  const dispatch = useDispatch()
  const favoriteIds = useSelector(selectFavoriteIds)
  const favoriteCount = useSelector(selectFavoritesCount)
  const favoriteSpeakers = speakers.filter((speaker) => favoriteIds.includes(speaker.id))

  return (
    <aside className={styles.panel} aria-live="polite">
      <div className={styles.heading}>
        <div>
          <p className={styles.label}>Моя программа</p>
          <h3>Избранные спикеры <span>{favoriteCount}</span></h3>
        </div>
        {favoriteCount > 0 && (
          <button type="button" onClick={() => dispatch(clearFavorites())}>Очистить</button>
        )}
      </div>

      {favoriteCount === 0 ? (
        <p className={styles.empty}>Нажмите «Добавить в избранное» на карточке, чтобы собрать личную программу.</p>
      ) : (
        <ul className={styles.list}>
          {favoriteSpeakers.map((speaker) => (
            <li key={speaker.id}>
              <span className={`${styles.miniAvatar} ${styles[speaker.accent]}`}>{speaker.initials}</span>
              <span><strong>{speaker.name}</strong><small>{speaker.time} · {speaker.room}</small></span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

Favorites.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
    accent: PropTypes.oneOf(['coral', 'blue', 'violet']).isRequired,
  })).isRequired,
}

export default Favorites
