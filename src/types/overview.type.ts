export interface IOverviewData {
    total_read: number
    total_earning: number
    total_reaction: number
    total_reader: number,
    reactions_summery:IOverviewSummery[],
    comments_summery:IOverviewSummery[],
    readers_summery:IOverviewSummery[]
  
}


export interface IOverviewSummery {
 type:'day'|'month',
 day: number,
 month:'string'
 value: number|string,
 upcoming: boolean
}