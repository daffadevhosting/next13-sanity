import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdaffadevhosting%2Fnext13-sanity&project-name=next13-sanity&repository-name=next13-sanity"
            target="_blank"
            rel="noopener noreferrer"
          >
            deploy to{' '}<Image
              src="/vercel.svg"
              alt="Deploy at vercel"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /></a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.npmjs.com/package/next-sanity#next-sanitystudio"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Temukan secara mendalam informasi tentang Next-Sanity fitur and API.
          </p>
        </a>

        <a
          href="/studio"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            NEXT13 Studio <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore built-in Next13 sanity studio kamu.</p>
        </a>

        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdaffadevhosting%2Fnext13-sanity&project-name=next13-sanity&repository-name=next13-sanity"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Deploy langsung Next13 Sanity ini secara instan ke Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
