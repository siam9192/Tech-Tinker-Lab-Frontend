import { ReactNode } from "react"
import { IconType } from "react-icons"

export type TRoute = {
    title?:string,
    href:string,
    icon:IconType
}


export interface ILayoutProps  {
  children:ReactNode
}


export type TRole = 'USER'|'MODERATOR'|'ADMIN'


