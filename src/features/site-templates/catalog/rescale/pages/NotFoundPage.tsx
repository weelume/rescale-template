'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,Button,path} from '../components/Shell'
import {Reveal} from '../components/Motion'
export default function NotFoundPage(props:SiteTemplatePageProps){const{locale='zh',basePath}=props;return <Shell {...props}><section className="rs-container rs-not-found"><Reveal flip><h1>404</h1></Reveal><p>{locale==='zh'?'这一页暂时迷路了':'This page has wandered off.'}</p><Button href={path(basePath)}>{locale==='zh'?'回到首页':'Home'}</Button></section></Shell>}
