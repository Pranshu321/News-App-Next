import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css'

export const Toolbar = ()=>{
   const router = useRouter(); 
   return(
     <div style={{background: 'black'}}>
     <div className={styles.main}>
      <div onClick={()=>router.push('/')}> 
        Home
      </div>
      <div onClick={()=>router.push('/feed/1')}>
        Feed
      </div>
      <div onClick={()=>router.push('/eom')}>
        EOM
      </div>
      <div onClick={()=>window.location.href = 'https://pranshuportfolio.netlify.app/'}>
        Portfolio
      </div>

     </div>
     </div>
    

   );
}