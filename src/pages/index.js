import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cleanlab</title>
        <meta name="description" content="Cleanlab is inventing the future of data-centric AI. We publish research, develop open source tools, and design interfaces to help you improve the quality of your datasets and diagnose various issues in them." />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.home}>
          Home
        </div>
      </main>
    </>
  )
}
