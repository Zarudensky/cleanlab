import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Select from '../Select/Select'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="./logo.svg"
            alt="Cleanlab"
            width={122}
            height={24}
            priority
          />
        </Link>
        <nav className={styles.navigation}>
          <Link className={styles.link} href="/about">About</Link>
          <Select
            label="Products"
            options={[
              { value: 'Product 1', href: '/Product_1' },
              { value: 'Product 2', href: '/Product_2' },
              { value: 'Product 3', href: '/Product_3' }
            ]}
          />
          <Select
            label="Solutions"
            options={[
              { value: 'Solution 1', href: '/Solution_1' },
              { value: 'Solution 2', href: '/Solution_2' }
            ]}
          />
          <Select
            label="Learn"
            options={[
              { value: 'Learn 1', href: '/Learn_1' },
              { value: 'Learn 2', href: '/Learn_2' },
              { value: 'Learn 3', href: '/Learn_3' }
            ]}
          />
          <Link className={styles.link} href="/community">Join our community</Link>
        </nav>
        <button className={styles.light__btn} type="button">Get in touch</button>
        <button className={styles.hard__btn} type="button">Try for free</button>
      </div>
    </header>
  )
}