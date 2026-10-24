'use client'
import {useEffect,useState,useRef} from 'react'
import {motion,useReducedMotion,useInView} from 'framer-motion'
import type {TemplateLocale} from '../../../types'
import {integrationImages} from '../content'
import {useRescaleHost} from '../host'
import {brand} from '../config/brand'
import {media} from './Shell'
import {Counter,Reveal} from './Motion'
import {StrategyBoard,ProcessSliders,ReportFolder} from './BentoEffects'
export function Features({locale}:{locale:TemplateLocale}){
  const host=useRescaleHost(),reduce=useReducedMotion(),[query,setQuery]=useState(0),ref=useRef<HTMLDivElement>(null),visible=useInView(ref)
  const queries=locale==='zh'?['向 AI 提问…','分析本季度的收入','寻找新的增长机会','生成我的业务报告']:['Ask AI anything…','Analyze quarterly revenue','Find growth opportunities','Generate my custom report']
  useEffect(()=>{if(!visible||reduce)return;const timer=setInterval(()=>setQuery(v=>(v+1)%4),3500);return()=>clearInterval(timer)},[visible,reduce])
  return <section className="rs-container rs-features" id="features" ref={ref}>
    <div className="rs-bento"><div className="rs-bento-split"><Reveal><div className="rs-ask" aria-live="off"><i className="rs-orb"/><span key={query}>{queries[query]}</span><i className="rs-cursor"/></div></Reveal>
    <Reveal className="rs-glass rs-dashboard" delay={0.1}><div className="rs-mini-nav"><strong>{host.brandName?.[locale]??brand.name[locale]}</strong><span>•••</span></div><div className="rs-dashboard-title">{locale==='zh'?'增长总览':'Growth overview'}<span>2026</span></div><div className="rs-bar-chart" aria-label={locale==='zh'?'收入增长示意图':'Illustrative revenue growth chart'}>{[30,46,35,64,48,77,68,93,83,99,91,115].map((h,i)=><motion.i key={i} initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:0.9,delay:i*0.065}} style={{height:h}}/>)}</div><div className="rs-chart-caption"><span>{locale==='zh'?'收入分析':'Revenue Analysis'}</span><span>+32.6%</span></div></Reveal>
    </div><Reveal className="rs-glass rs-rings" delay={0.2}><div className="rs-ring-graphic"><svg viewBox="0 0 200 200" role="img" aria-label={locale==='zh'?'增长 73%，销售 67%，效率 54%':'Growth 73%, sales 67%, efficiency 54%'}>{[76,59,42].map((r,i)=><g key={r}><circle cx="100" cy="100" r={r} fill="none" stroke="#e8e9f4" strokeWidth="12"/><motion.circle cx="100" cy="100" r={r} fill="none" stroke={['#6667bf','#a9a2ed','#85d9e7'][i]} strokeWidth="12" strokeLinecap="round" strokeDasharray={2*Math.PI*r} initial={{strokeDashoffset:2*Math.PI*r}} whileInView={{strokeDashoffset:2*Math.PI*r*(1-[0.73,0.67,0.54][i])}} viewport={{once:true}} transition={{duration:1.8,delay:i*0.2}} transform="rotate(-90 100 100)"/></g>)}</svg><span>✦</span></div><div className="rs-ring-labels">{(['增长','销售','效率'] as const).map((v,i)=><p key={v}><i style={{background:['#6667bf','#a9a2ed','#85d9e7'][i]}}/>{locale==='zh'?v:['Growth','Sales','Efficiency'][i]}<strong><Counter value={[73,67,54][i]} unit="%"/></strong></p>)}</div></Reveal>
    <Reveal className="rs-glass rs-report" delay={0.15}><ReportFolder locale={locale}/><h3>{locale==='zh'?'定制分析报告':'Custom Reports'}</h3></Reveal>
    <Reveal className="rs-glass rs-partner-orbit" delay={0.25}><div className="rs-orbit-ring" aria-hidden="true"><span>✦ INSTANTLY ✦ CONNECTED GROWTH PARTNERS</span></div><div className="rs-orbit-icons">{integrationImages.map((image,i)=><div key={image} style={{transform:`rotate(${i*60}deg) translate(95px) rotate(-${i*60}deg)`}}><img src={media(image)} alt={['Slack','Notion','Figma','Google Drive','Webflow','HubSpot'][i]}/></div>)}</div><span className="rs-orbit-center">✦</span></Reveal>
    <Reveal className="rs-glass rs-simple" delay={0.3}><StrategyBoard/><h3>{locale==='zh'?'简单的增长策略':'Simple Strategies'}</h3></Reveal>
    <Reveal className="rs-glass rs-process" delay={0.35}><ProcessSliders/><h3>{locale==='zh'?'优化每一步流程':'Process Optimisation'}</h3></Reveal></div>
  </section>
}
