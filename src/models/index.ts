export interface ISESearchResp {
  SearchResult: ISESearchResult
}

export interface ISESearchResult {
  total: number;
  resources: ISESearchResource[],
  nextPage?: ISELink;
  previousPage?: ISELink;
}

export interface ISESearchResource {
  id: string;
  name: string;
  description: string;
  link: ISELink; 
}
export type ISELink = {
  rel: string;
  href: string;
  type: string;
}

export enum ISEQueryOperator {
  EQUALS = 'EQ',
  NotEquals = 'NEQ',
  GREATER = 'GT',
  LESS = 'LT',
  STARTSWith = 'STARTSW',
  NotSTARTSWith = 'NSTARTW',
  ENDSWwith = 'ENDSW',
  NotENDSWith = 'NENDSW',
  CONTAINS = 'CONTAINS',
  NotCONTAINS = 'NCONTAINS'
}

export interface ISEFilter {
  prop: string;
  operator: ISEQueryOperator;
  value: string|number;
}

export * from './endpoint';