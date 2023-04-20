import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Select from '../Select/Select'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const handleClickOutside = (event) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target) &&
      !event.target.classList.contains(styles.menu__btn)
    ) {
      setIsOpen(false)
    }
  }

  const handleSelectOption = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <header className={styles.header}>
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
      <div className={styles.menu__btn} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.menu__container} ${isOpen ? styles.open : ''}`} ref={selectRef}>
        <nav className={styles.navigation}>
          <Link className={styles.link} href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Select
            label="Products"
            options={[
              { value: 'Product 1', href: '/#' },
              { value: 'Product 2', href: '/#' },
              { value: 'Product 3', href: '/#' }
            ]}
            onSelectOption={handleSelectOption}
          />
          <Select
            label="Solutions"
            options={[
              { value: 'Solution 1', href: '/#' },
              { value: 'Solution 2', href: '/#' }
            ]}
            onSelectOption={handleSelectOption}
          />
          <Select
            label="Learn"
            options={[
              { value: 'Learn 1', href: '/#' },
              { value: 'Learn 2', href: '/#' },
              { value: 'Learn 3', href: '/#' },
              { value: 'Learn 4', href: '/#' }
            ]}
            onSelectOption={handleSelectOption}
          />
          <Link 
            className={styles.link} href="https://communityinviter.com/apps/cleanlab-community/cleanlab-community" 
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            Join our community
          </Link>
        </nav>
        <button className={styles.light__btn} type="button">Get in touch</button>
        <button className={styles.hard__btn} type="button">Try for free</button>
      </div>
    </header>
  )
}