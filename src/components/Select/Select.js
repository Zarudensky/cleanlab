import styles from './Select.module.css'
import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'

export default function Select({ label, options, onSelectOption }) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const handleClickOutside = useCallback((event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }, [selectRef, setIsOpen])

  const handleSelectOption = () => {
    setIsOpen(false)
    onSelectOption()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div ref={selectRef} className={styles.select}>
      <div 
        className={styles.select__label} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </div>
      <div className={`${styles.select__options} ${isOpen && styles.open}`}>
        {options.map((option) => (
          <div key={option.value} className={styles.select__option}>
            <Link 
              className={styles.link} 
              href={option.href}
              onClick={() => handleSelectOption(option)}
            >
              {option.value}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
