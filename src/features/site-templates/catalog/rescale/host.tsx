'use client';
import {createContext,useContext,type ReactNode} from 'react';
import type {TemplateLocale} from '../../types';
export interface RescaleHostOptions{locale?:TemplateLocale;brandName?:Record<TemplateLocale,string>;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Record<TemplateLocale,string>;marketplaceAriaLabel?:Record<TemplateLocale,string>;filing?:ReactNode}
const Context=createContext<RescaleHostOptions>({});
/** 独立品牌与宿主展示解耦，宿主只能注入约定的品牌和市场入口。 */
export function RescaleHostProvider({children,...options}:RescaleHostOptions&{children:ReactNode}){return <Context.Provider value={options}>{children}</Context.Provider>}
export const useRescaleHost=()=>useContext(Context);
