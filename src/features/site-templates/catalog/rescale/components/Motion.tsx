'use client'
import {useEffect,useRef,useState,type ReactNode} from 'react'
import {motion,useInView,useReducedMotion} from 'framer-motion'
export const spring={type:'spring' as const,duration:1,bounce:0.2}
/** 各区使用独立触发与轨迹；首屏文字保留原站的 Y 轴翻转和 0.2 秒错峰。 */
export function Reveal({children,delay=0,flip=false,className=''}:{children:ReactNode;delay?:number;flip?:boolean;className?:string}){
  const reduce=useReducedMotion()
  return <motion.div className={className} initial={reduce?false:{opacity:0,y:30,rotateY:flip?90:0}} whileInView={{opacity:1,y:0,rotateY:0}} viewport={{once:true,amount:0.15}} transition={{...spring,delay}}>{children}</motion.div>
}
export function Counter({value,unit='',decimals=0}:{value:number;unit?:string;decimals?:number}){
  const ref=useRef<HTMLSpanElement>(null),visible=useInView(ref,{once:true,amount:0.5}),reduce=useReducedMotion(),[current,setCurrent]=useState(0)
  useEffect(()=>{if(!visible||reduce)return;let frame=0,start=0;const tick=(now:number)=>{if(!start)start=now;const p=Math.min((now-start)/1800,1);setCurrent(value*(1-Math.pow(1-p,3)));if(p<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[visible,value,reduce])
  return <span ref={ref} data-counter-target={value}>{(reduce?value:current).toFixed(decimals)}{unit}</span>
}
export function Video({src,poster,className='',controls=false}:{src:string;poster?:string;className?:string;controls?:boolean}){
  const ref=useRef<HTMLVideoElement>(null),visible=useInView(ref,{amount:0.2}),reduce=useReducedMotion(),[error,setError]=useState(false)
  useEffect(()=>{const video=ref.current;if(!video||controls)return;if(visible&&!reduce){video.play().catch(e=>{console.debug('[rescale:video] autoplay blocked',{name:e.name})})}else video.pause()},[visible,reduce,controls])
  return <div className={className}><video ref={ref} src={src} poster={poster} controls={controls} muted={!controls} loop={!controls} playsInline preload="metadata" onError={()=>{setError(true);console.error('[rescale:video] media failed',{src})}}/>{error&&<p role="alert">视频加载失败 / Video could not be loaded</p>}</div>
}
export function Ticker({children,reverse=false,vertical=false,label}:{children:ReactNode;reverse?:boolean;vertical?:boolean;label:string}){
  const [paused,setPaused]=useState(false)
  return <div className={`rs-ticker ${vertical?'rs-ticker-vertical':''}`} data-paused={paused} aria-label={label}>
    <div className="rs-ticker-track" style={{animationDirection:reverse?'reverse':'normal'}}><div>{children}</div><div aria-hidden="true" inert>{children}</div></div>
    <button className="rs-pause" type="button" onClick={()=>setPaused(v=>!v)} aria-label={`${paused?'播放 / Play':'暂停 / Pause'} ${label}`}>{paused?'▶':'Ⅱ'}</button>
  </div>
}
