export interface IOverviewData {
  total_read: number;
  total_earning: number;
  total_reaction: number;
  total_reader: number;
  reactions_summery: IOverviewSummery[];
  comments_summery: IOverviewSummery[];
  readers_summery: IOverviewSummery[];
}

export interface IOverviewSummery {
  type: 'day' | 'month';
  day: number;
  month: 'string';
  value: number | string;
  upcoming: boolean;
}

export type TMonthData = {
  month:string,
  posts:number,
  revenue:number,
  payments:number,
  user_activities:number,
  upcoming:boolean
}

export interface IAdminOverview {
  total_user: number;
  total_payment: number;
  total_revenue: number;
  total_subscription: number;
  total_post: number;
  running_month_revenue: number;
  monthsData:TMonthData[],
}
