import Head from 'next/head'
import { Text } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';
import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';
export default function Home() {
  return (
    <>
    <Head>
            <title>Newis | Home</title>
          </Head>
    <NextUIProvider>
     <Toolbar/>
     <div className='page-container' style={{background: 'black'}}>
     <div className={styles.main}>
     <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        className={styles.head}
        weight="bold"
      >
        Next.js News App
      </Text>
      <Text blockquote style={{background: 'white'  , marginTop: '30px' , fontWeight: "bolder" , boxShadow: '2px 2px 30px white'}}>Your one stop for the latest news articles.</Text>
     </div>
     </div>
    </NextUIProvider>
    </>
  )
}
