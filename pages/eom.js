import Image from 'next/image'
import React from 'react'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/eom.module.css'
import Head from 'next/head';

const eom = () => {
  return (
    <>
    <Head>
            <title>Newis | EOM</title>
          </Head>
    <Toolbar />
    <div className='page-container'>
        <div className={styles.main}>
            <h1>Employee Of The Month</h1>
            <div className={styles.eom}>
                <h3>Pranshu Jain</h3>
                <h5>Software Developer</h5>
                <Image src="/me.png" width={250} height={250} className={styles.eomimg} />
                <p>
                On this side, Pranshu Jain is a full-Stack developer with an experience of 1yr+. 
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default eom