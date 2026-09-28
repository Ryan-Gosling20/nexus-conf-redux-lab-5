import { useState } from 'react'
import Button from './components/Button/Button.jsx'
import SpeakerCard from './components/SpeakerCard/SpeakerCard.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Accordion from './components/Accordion/Accordion.jsx'
import heroImage from './assets/conference-banner.png'
import styles from './App.module.css'

const speakers = [
  { id: 1, name: 'Анна Волкова', role: 'Lead Product Designer · CloudLab', talk: 'Как дизайн-системы ускоряют продукт', time: '14:30', room: 'Зал A', initials: 'АВ', accent: 'coral' },
  { id: 2, name: 'Михаил Орлов', role: 'Frontend Architect · PixelCraft', talk: 'React без лишней сложности', time: '16:00', room: 'Зал B', initials: 'МО', accent: 'blue' },
  { id: 3, name: 'Елена Соколова', role: 'ML Engineer · Nova AI', talk: 'Практичный искусственный интеллект', time: '17:20', room: 'Главная сцена', initials: 'ЕС', accent: 'violet' },
]

const questions = [
  { question: 'Можно ли вернуть билет?', answer: 'Да, билет можно вернуть не позднее чем за 7 дней до начала конференции.' },
  { question: 'Будет ли запись докладов?', answer: 'Да, всем участникам будет доступна запись выступлений в течение трёх дней после конференции.' },
  { question: 'Что входит в стоимость?', answer: 'Доступ ко всем докладам, кофе-брейки, материалы спикеров и запись конференции.' },
]

function App() {
  const [notice, setNotice] = useState('')
  const handleTicketClick = () => setNotice('Билет зарезервирован — проверьте почту!')

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Nexus Conf — на главную">
          <span className={styles.brandMark}>◆</span><span>NEXUS CONF</span>
        </a>
        <nav className={styles.nav} aria-label="Главное меню">
          <a href="#speakers">Спикеры</a><a href="#faq">FAQ</a>
        </nav>
        <Button variant="ghost" onClick={handleTicketClick}>Купить билет</Button>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <img className={styles.heroImage} src={heroImage} alt="Абстрактная цифровая сцена конференции" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Москва · 18 октября · 2026</p>
            <h1>Технологии, которые<br />создают завтра</h1>
            <p className={styles.lead}>Один день, три сцены и сильнейшие эксперты продуктовой разработки, дизайна и искусственного интеллекта.</p>
            <div className={styles.heroActions}>
              <Button onClick={handleTicketClick}>Купить билет →</Button>
              <a className={styles.programLink} href="#speakers">Смотреть программу</a>
            </div>
            {notice && <p className={styles.notice} role="status">{notice}</p>}
          </div>
          <div className={styles.heroStats}>
            <div><strong>24</strong><span>спикера</span></div>
            <div><strong>3</strong><span>тематические сцены</span></div>
            <div><strong>800+</strong><span>участников</span></div>
          </div>
        </section>

        <section className={styles.section} id="speakers">
          <div className={styles.sectionHeading}>
            <div><p className={styles.kicker}>Экспертиза из первых рук</p><h2>Спикеры конференции</h2></div>
            <p>Лидеры индустрии поделятся опытом, рабочими подходами и честными выводами.</p>
          </div>
          <Favorites speakers={speakers} />
          <div className={styles.speakerGrid}>
            {speakers.map((speaker) => <SpeakerCard key={speaker.name} {...speaker} />)}
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq">
          <div className={styles.faqIntro}>
            <p className={styles.kicker}>Вопросы и ответы</p><h2>Всё, что нужно знать</h2>
            <p>Не нашли ответ? Напишите нам на <a href="mailto:hello@nexusconf.ru">hello@nexusconf.ru</a>.</p>
          </div>
          <div className={styles.accordionList}>
            {questions.map((item) => <Accordion key={item.question} {...item} />)}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.brand}><span className={styles.brandMark}>◆</span><span>NEXUS CONF</span></div>
        <p>© 2026 Nexus Conf. Сделано для тех, кто создаёт цифровые продукты.</p>
      </footer>
    </div>
  )
}

export default App
