import { useState } from 'react'
import styles from '../styles.module.css'
import { Link } from 'react-router'

function LandingPageCard() {
  return (
    <Link to="/fintech" className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <img src="https://placehold.co/300x200" alt="Landing Page Preview" className={styles.cardImage} />
      </div>
      <h3 className={styles.cardTitle}>Landing Page 1</h3>
    </Link>
  )
}

function SortFilter() {
  return null

  return (
    <div>
      <form className={styles.sortFilterForm}>
        <select className={styles.sortDropdown}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Most Popular</option>
        </select>
        <button className={styles.filterButton}>Filters</button>
      </form>
    </div>
  )
}

export default function LandingPage() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Ami Baruwa-Etti</h1>
        <form>
          <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className={styles.searchBar} />
        </form>
      </header>
      <main>
        <div className={styles.intro}>
          <h2 className={styles.title}>Landing Pages</h2>
          <p>A project showcasing various landing page designs.</p>
        </div>
        <div>
          <SortFilter />
          <ul className={styles.cardList}>
            <li><LandingPageCard /></li>
          </ul>
        </div>
      </main>
    </div>
  )
}