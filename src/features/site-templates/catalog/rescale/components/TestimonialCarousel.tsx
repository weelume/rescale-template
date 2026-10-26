'use client'
import {useEffect,useRef,useState} from 'react'
import {AnimatePresence,motion,useInView,useReducedMotion} from 'framer-motion'
import type {TemplateLocale} from '../../../types'
import {testimonials,t} from '../content'
import {media} from './Shell'

/** 手机端使用原站的横向单卡轮播，桌面保留双列反向滚动。 */
export function TestimonialCarousel({locale}:{locale:TemplateLocale}) {
  const [index,setIndex]=useState(0)
  const [paused,setPaused]=useState(false)
  const [interacting,setInteracting]=useState(false)
  const ref=useRef<HTMLDivElement>(null)
  const visible=useInView(ref,{amount:0.2})
  const reduce=useReducedMotion()
  const entries=[...testimonials.slice(6),...testimonials.slice(0,6)]
  const client=entries[index]
  const move=(direction:number)=>setIndex(value=>(value+direction+entries.length)%entries.length)
  useEffect(()=>{
    if(!visible||paused||interacting||reduce)return
    const timer=setInterval(()=>setIndex(value=>(value+1)%testimonials.length),2000)
    return()=>clearInterval(timer)
  },[visible,paused,interacting,reduce])
  return <div ref={ref} className="rs-testimonial-carousel" aria-roledescription={locale==='zh'?'轮播':'carousel'} aria-label={locale==='zh'?'客户评价':'Client testimonials'}>
    <div className="rs-testimonial-stage" onPointerEnter={()=>setInteracting(true)} onPointerLeave={()=>setInteracting(false)}>
      <AnimatePresence initial={false} mode="wait">
        <motion.article key={client.name} className="rs-glass rs-quote" drag={reduce?false:'x'} dragConstraints={{left:0,right:0}} dragElastic={0.2}
          onDragStart={()=>setInteracting(true)} onDragEnd={(_,info)=>{if(Math.abs(info.offset.x)>45)move(info.offset.x<0?1:-1);setInteracting(false)}}
          initial={reduce?false:{x:40,opacity:0}} animate={{x:0,opacity:1}} exit={reduce?{opacity:0}:{x:-40,opacity:0}}
          transition={{type:'spring',stiffness:200,damping:40}} whileHover={reduce?undefined:{scale:0.93}}>
          <p>“{t(client.quote,locale)}”</p><div><img src={media(client.image)} alt=""/><div><h3>{client.name}</h3><small>{t(client.role,locale)}</small></div></div>
        </motion.article>
      </AnimatePresence>
    </div>
    <div className="rs-carousel-controls">
      <button type="button" onClick={()=>move(-1)} aria-label={locale==='zh'?'上一条评价':'Previous testimonial'}>‹</button>
      <button type="button" onClick={()=>setPaused(value=>!value)} aria-pressed={paused} aria-label={locale==='zh'?(paused?'播放评价轮播':'暂停评价轮播'):(paused?'Play testimonials':'Pause testimonials')}>{paused?'▶':'Ⅱ'}</button>
      <button type="button" onClick={()=>move(1)} aria-label={locale==='zh'?'下一条评价':'Next testimonial'}>›</button>
    </div>
  </div>
}
