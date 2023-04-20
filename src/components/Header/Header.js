import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="./logo.svg"
            alt="Cleanlab"
            width={200}
            height={40}
            priority
          />
        </Link>
        <nav className={styles.navigation}>
          <Link className={styles.link} href="/about">About</Link>
          <div className={styles.select}>
            <label for="products" className={styles.select__title}>Products</label>
            <select id="products" className={styles.select__options}>
              <option className={styles.select__option}>Product 1</option>
              <option className={styles.select__option}>Product 2</option>
              <option className={styles.select__option}>Product 3</option>
            </select>
          </div>
          <div className={styles.select}>
            <label for="solutions" className={styles.select__title}>Solutions</label>
            <select id="solutions" className={styles.select__options}>
              <option className={styles.select__option}>Solution 1</option>
              <option className={styles.select__option}>Solution 2</option>
              <option className={styles.select__option}>Solution 3</option>
            </select>
          </div>
          <Link className={styles.link} href="/learn">Learn</Link>
          <Link className={styles.link} href="/community">Community</Link>
        </nav>
        <button className={styles.light__btn} type="button">Get in touch</button>
        <button className={styles.hard__btn} type="button">Try for free</button>
      </div>
    </header>
  )
}