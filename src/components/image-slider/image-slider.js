'use client'
import './image-slider.css'

import Image from 'next/image'

import slide1 from '@/assets/grouplogo1.png'
import slide2 from '@/assets/grouplogo2.png'
import slide3 from '@/assets/grouplogo3.jpg'
import slide4 from '@/assets/grouplogo4.png'
import slide5 from '@/assets/grouplogo5.png'
import slide6 from '@/assets/grouplogo6.png'
import slide7 from '@/assets/grouplogo7.png'
import { useEffect, useState } from 'react'

// 화면을 그때그때 바꿔 주기 위해 useState 와 useEffect를 사용
// 'use client'
const images =[
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7
];
export default function ImageSlider(){

    const [curSlideIdx, setCurSlideIdx] = useState();

    useEffect(()=>{
        // 타이머 또는 fetch
        // useEffect : 오래걸리는 작업을 별도로 실행시키게함
        // 1. 로딩시 2. 언로딩시 3. 갱신시
        // 1. 로딩시 함수 내부 작성
        // 2. 언로딩시 return에 작성
        // 3. 갱신시 [] 안에 대상 변수나 state를 넣어놓기

        // 3초에 한번씩 동작하는 타이머 (state의 값을 1씩 증가시키기 0~6)

        const slideTimer = setInterval(()=>{
            setCurSlideIdx((prev) => { return(prev < images.length -1 ? prev+1 : 0)});
        },3000)

        return ()=>clearInterval(slideTimer);

    },[])

    return(
        <div className='slideshow-slide'>
            {
                images.map((item,index)=>{
                    return(
                        <Image src={item} className={index === curSlideIdx ? 'active' : ''} 
                        alt='' key={index}/>
                    )
                })
            }
        </div>
    )
}