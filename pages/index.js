import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric Butler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world.</h1>
      <p>This site is still being built.</p>
    </div>
  )
}
