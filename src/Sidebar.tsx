import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'

const user = {
  name: 'Ethan',
  role: 'Basketball Player',
  avatar: '/profile.jpg', // Place a profile.jpg in public/
}

const stats = {
  goals: 24,
  assists: 12,
  playtime: 36,
}

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileCard}>
        <img src={user.avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.name}>{user.name}</div>
        <div className={styles.role}>{user.role}</div>
      </div>
      
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink}>
          Dashboard
        </Link>
        <Link to="/testform" className={styles.navLink}>
          Test Form
        </Link>
      </nav>
      
      <div className={styles.statsSection}>
        <div className={styles.statsTitle}>賽季統計</div>
        <div className={styles.statRow}><span>進球</span><span>{stats.goals}</span></div>
        <div className={styles.statRow}><span>助攻</span><span>{stats.assists}</span></div>
        <div className={styles.statRow}><span>平均上場(分)</span><span>{stats.playtime}</span></div>
      </div>
    </aside>
  )
} 