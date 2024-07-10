
import cat1 from '@/assets/cat1.jpg'
import cat2 from '@/assets/cat2.jpg'
import cat3 from '@/assets/cat3.jpg'
import Image from 'next/image'
import styles from './page.module.css'

export default function About(){
    return(
        <div className={styles.About}>
            <header className={styles.header}>
                <h1 className={styles.highlight}>
                    우리 동아리 
                </h1>
                <p>우리 동아리는...</p>
            </header>
            <main className={styles.main}>
                <ul className={styles.perks}>
                    <li>
                        <Image src={cat1} alt=''/>
                        <p>고양이1</p>
                    </li>
                    <li>
                        <Image src={cat2} alt=''/>
                        <p>고양이2</p>
                    </li>
                    <li>
                        <Image src={cat3} alt=''/>
                        <p>고양이3</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}

// 이미지 3개 
// 소개글 