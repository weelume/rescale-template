'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {articles} from '../content/articles'
import {t} from '../content'
import {Reveal} from './Motion'
import {media,path} from './Shell'
export function JournalCards({locale='zh',basePath,limit=articles.length,exclude}:SiteTemplatePageProps&{limit?:number;exclude?:string}){return <div className="rs-journal-grid">{articles.filter(a=>a.slug!==exclude).slice(0,limit).map((a,i)=><Reveal delay={(i%2)*0.12} key={a.slug}><Link href={path(basePath,'journal/'+a.slug)} className="rs-glass rs-journal-card"><img src={media(a.image)} alt={t(a.title,locale)} loading="lazy"/><div><h2>{t(a.title,locale)}</h2><div className="rs-story-meta"><time dateTime={a.date}>{new Date(a.date+'T12:00:00Z').toLocaleDateString(locale==='zh'?'zh-CN':'en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'})}</time><span>{locale==='zh'?`阅读约 ${a.minutes} 分钟`:`Reading time ${a.minutes} mins`}</span></div></div></Link></Reveal>)}</div>}
