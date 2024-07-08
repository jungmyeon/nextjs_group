'use client'
// css 중복 방지를 위한 .module.css 파일 (해당 컴포넌트 전용으로 사용)
import Link from 'next/link';
// import styles from './header.module.css';
import styles from './header.module.css'

// 이미지를 사용하려면 import 
import navLogo from '@/assets/grouplogo.png';       // navLogo.src
import { usePathname } from 'next/navigation';
import HeaderBackground from './header-background';

export default function Header(){
    // 현재 경로가 어딘지? ==> <Link>의 색깔을 변경 (.active)
    const path = usePathname();         // URL 정보 ('use client')



    return(
    <>
        <HeaderBackground/>
        <div className={styles.headerContainer}>
        <Link href='/'>
         <img src={navLogo.src} alt="우리 동아리"/>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href='/group' className={path.startsWith('/group')? styles.active : undefined}>동아리 게시글</Link>
                </li>
                <li>
                    <Link href='/about' className={path.startsWith('/about')? styles.active : undefined}>소개</Link>
                </li>
            </ul>
        </nav>
        </div>
    </>
    )
}

// 이 네비게이션 헤더는 모든 페이지의 최상단에 놓을거니까
// layout.js 의 {children} 위에 추가한다