import Head from 'next/head'
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Cleanlab</title>
        <meta name="description" content="Meet our incredible team that is inventing the future of data-centric AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.about}>
          About Us
        </div>
      </main>
    </>
  )
}
