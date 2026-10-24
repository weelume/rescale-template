'use client'
import {useState} from 'react'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {JournalCards} from '../components/JournalCards'
import {Reveal} from '../components/Motion'
import {articles} from '../content/articles'
import {copy,t} from '../content'
export default function JournalPage(props:SiteTemplatePageProps){const{locale='zh'}=props,[limit,setLimit]=useState(5);return <Shell {...props}><div className="rs-container"><header className="rs-page-header"><Reveal><span className="rs-eyebrow">{locale==='zh'?'增长期刊':'JOURNAL'}</span></Reveal><Reveal flip delay={0.2}><h1>{t(copy.journalTitle,locale)}</h1></Reveal><Reveal delay={0.4}><p>{t(copy.journalDesc,locale)}</p></Reveal></header><JournalCards {...props} limit={limit}/>{limit<articles.length&&<button className="rs-load-more" onClick={()=>setLimit(articles.length)}>{locale==='zh'?'加载更多':'Load More'}</button>}</div></Shell>}
