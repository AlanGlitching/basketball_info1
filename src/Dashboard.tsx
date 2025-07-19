import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import styles from './Dashboard.module.css'

const metrics = [
  { label: '得分', value: 28, change: '+10%', changeType: 'up' },
  { label: '助攻', value: 7, change: '+5%', changeType: 'up' },
  { label: '籃板', value: 12, change: '-2%', changeType: 'down' },
  { label: '出賽場次', value: 18, change: '0%', changeType: 'neutral' },
]

const matches = [
  { opponent: 'Lions', stats: '22分 8籃板 5助攻' },
  { opponent: 'Tigers', stats: '30分 10籃板 4助攻' },
  { opponent: 'Bears', stats: '18分 7籃板 6助攻' },
]

type SeasonComparisonRow = {
  season: string
  points: number
  assists: number
  rebounds: number
  games: number
}

export default function Dashboard() {
  const [seasonComparison, setSeasonComparison] = useState<SeasonComparisonRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSeasonComparison() {
      setLoading(true)
      setError(null)
      const { data, error } = await supabase
        .from('season_comparison')
        .select('season, points, assists, rebounds, games')
        .order('season', { ascending: false })
      if (error) {
        setError(error.message)
      } else {
        setSeasonComparison(data || [])
      }
      setLoading(false)
    }
    fetchSeasonComparison()
  }, [])

  return (
    <main className={styles.dashboard}>
      <section className={styles.metricsSection}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.metricCard}>
            <div className={styles.metricLabel}>{m.label}</div>
            <div className={styles.metricValue}>{m.value}</div>
            <div className={styles.metricChange + ' ' + styles[m.changeType]}>{m.change}</div>
          </div>
        ))}
      </section>
      <section className={styles.matchesSection}>
        <div className={styles.sectionTitle}>近期比賽紀錄</div>
        {matches.map((match, i) => (
          <div key={i} className={styles.matchCard}>
            <div className={styles.opponent}>對手：{match.opponent}</div>
            <div className={styles.stats}>{match.stats}</div>
          </div>
        ))}
      </section>
      <section className={styles.comparisonSection}>
        <div className={styles.sectionTitle}>賽季比較表</div>
        {loading ? (
          <div>載入中...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>讀取失敗：{error}</div>
        ) : (
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>賽季</th><th>得分</th><th>助攻</th><th>籃板</th><th>出賽場次</th>
              </tr>
            </thead>
            <tbody>
              {seasonComparison.map((row) => (
                <tr key={row.season}>
                  <td>{row.season}</td>
                  <td>{row.points}</td>
                  <td>{row.assists}</td>
                  <td>{row.rebounds}</td>
                  <td>{row.games}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
} 