'use client'
import {useRef} from 'react'
import {motion,useScroll,useTransform,useReducedMotion} from 'framer-motion'
import type {TemplateLocale} from '../../../types'
import {useRescaleHost} from '../host'
import {brand} from '../config/brand'
import {t,type Copy} from '../content'
export function Spotlight({locale}:{locale:TemplateLocale}){
  const ref=useRef<HTMLDivElement>(null),reduce=useReducedMotion(),host=useRescaleHost()
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','center center']})
  const rotateX=useTransform(scrollYProgress,[0,1],[25,0]),scale=useTransform(scrollYProgress,[0,1],[.8,1]),y=useTransform(scrollYProgress,[0,1],[180,0])
  const side:Copy[]=[['数据看板','Dashboard'],['营销活动','Campaigns'],['数据分析','Analytics'],['平台集成','Integration'],['分析报告','Reports'],['业务表现','Performance']]
  return <div ref={ref} className="rs-spotlight-wrap rs-container"><motion.div className="rs-spotlight rs-glass" style={reduce?undefined:{rotateX,scale,y,transformPerspective:1200}}>
    <div className="rs-spotlight-top"><strong>{host.brandName?.[locale]??brand.name[locale]}</strong><span>{locale==='zh'?'搜索增长策略':'Search Strategies'}</span><span className="rs-campaign-chip">{locale==='zh'?'创建营销活动':'Create Campaign'}</span></div>
    <div className="rs-spotlight-body"><aside>{side.map((item,i)=><span key={i}><i>{['▦','◇','◷','▤','▧','◉'][i]}</i>{t(item,locale)}</span>)}<span>{locale==='zh'?'设置':'Settings'}</span></aside><div className="rs-spotlight-content"><h3>{locale==='zh'?'业务表现总览':'Performance Overview'}</h3><div className="rs-spotlight-stats">{([{title:['本周增长','Growth this Week'],value:'$45,800'},{title:['活跃营销活动','Active Campaigns'],value:'24'},{title:['已生成 AI 洞察','AI Insights Generated'],value:'1,250'}] satisfies {title:Copy;value:string}[]).map(item=><div key={item.value}><small>{t(item.title,locale)}</small><strong>{item.value}</strong></div>)}</div><div className="rs-spotlight-charts"><div><h3>{locale==='zh'?'业务表现分析':'Performance Analytics'}</h3><div className="rs-split-chart"><span>{locale==='zh'?'投资回报趋势 · 业务洞察':'ROI Trends · Insights'}</span><div>{[66,40,75,62,70,44,67,51,72,60,73,58].map((v,i)=><i key={i} style={{height:v*1.9}}><b style={{height:v}}/><em style={{height:110-v/2}}/></i>)}</div><small>{locale==='zh'?'1月　2月　3月　4月　5月　6月　7月　8月　9月　10月　11月　12月':'Jan　Feb　Mar　Apr　May　Jun　Jul　Aug　Sep　Oct　Nov　Dec'}</small></div></div><div><h3>{locale==='zh'?'资源分配':'Resource Distribution'}</h3><div className="rs-resource-chart"><div className="rs-resource-ring"><span>AI</span></div><small>{locale==='zh'?'营销预算 · 集成使用 · AI 处理':'Campaign budget · Integrations · AI'}</small></div></div></div></div></div>
  </motion.div></div>
}
