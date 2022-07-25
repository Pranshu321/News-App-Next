import React from 'react'
import styles from '../../styles/feed.module.css'
import { useRouter } from 'next/router'
import { Toolbar } from '../../components/toolbar';
import Head from 'next/head';

const pageid = ({pageNumber , articles}) => {
    const router = useRouter();
    return (
        <>
          <Head>
            <title>Newis | News</title>
          </Head>
          <Toolbar />
          <div className={styles.main}>
            {articles.map((article,idx)=>(
                <div key={idx} className={styles.post}>
                 <h1>{article.title}</h1>
                 <p>{article.description}</p>
                 {article.urlToImage && <img src={article.urlToImage}  />}
                </div>
            ))}
            <div className={styles.paginator}>
             <div  onClick={()=>{
                if(pageNumber>1){
                    router.push(`/feed/${pageNumber-1}`).then(()=>{window.scrollTo(0,0)});
                }
             }} className={pageNumber===1 ? styles.disabled : styles.active}>
              
                {'<-   '} Previous Page
             </div>
             <div>#{pageNumber}</div>
             <div  onClick={()=>{
                if(pageNumber<5){
                    router.push(`/feed/${pageNumber+1}`).then(()=>{window.scrollTo(0,0)});
                }
             }} className={pageNumber===5 ? styles.disabled : styles.active}>
              
                 Next Page {'->'}
             </div>
            </div>
          </div>
        </>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageid;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const apiResponse = await fetch(`
    https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}&apiKey=6362e9df39784ed9a27924a48d849560`);

    const apijson = await apiResponse.json();
    // console.log(apijson);

    const {articles} = apijson;

    return {
        props:{
           articles,
           pageNumber: Number.parseInt(pageNumber) 
        }
    }
};

export default pageid
