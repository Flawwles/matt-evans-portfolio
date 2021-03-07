import Head from 'next/head'
import Button from '../components/Button/Button.js'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
         Matthew Evans
                </h1>
                <h2>
          UX Designer with a strong background in email & UI. <br/>
          Codes and animates a bit here and there.
                </h2>
                <div>
                    <Button type="primary" jump>Primary</Button>
                    <Button type="secondary">Sec</Button>
                    <Button>None</Button>
                </div>
            </main>
        </div>
    )
}
