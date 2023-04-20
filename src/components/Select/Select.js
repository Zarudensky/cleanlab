import styles from './Select.module.css'
import Link from 'next/link'

export default function Select({ label, options }) {
  return (
    <div className={styles.select}>
      <div className={styles.select__label}>{label}</div>
      <div id="products" className={styles.select__options}>
        {options.map((option) => (
          <div key={option.value} className={styles.select__option}>
            <Link className={styles.link} href={option.href}>{option.value}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}