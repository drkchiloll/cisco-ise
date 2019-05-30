process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { AxiosInstance } from 'axios';
import { requestInstance } from './requests';
import {
  ISESearchResult,
  ISEFilter,
  ICreate,
  ISECreate,
  IEndpointIDResponse,
  ISEQueryOperator
} from './models';
export class ISEErs {
  private request: AxiosInstance;
  constructor({
    user,
    pass,
    host
  }) {
    this.request = requestInstance({
      auth: {
        username: user, password: pass
      },
      host,
      endpoint: 'ers'
    })
  }
  createEndPoint(params: ICreate) {
    const createObj: ISECreate = {
      ERSEndPoint: {
        name: params.name,
        mac: params.mac,
        description: params.desc,
        staticGroupAssignment: params.staticGroupAssignment
      }
    }
    return this.request.post(
      '/endpoint', createObj
    ).then(({ headers }) => {
      let deviceId = headers.location
        .split('/')[headers.location.split('/').length - 1]
      return this.getEndpoint(deviceId, null);
    }).catch(err => {
      const { response: {data, status, statusText}} = err;
      return {
        error: {
          status,
          statusText,
          errMessages: data.ERSResponse.messages
        }
      };
    });
  }
  updateEndpoint(id: string) {}
  private filterBuilder(filter) {
    return filter.reduce((str, f: ISEFilter, idx: number): string => {
      let tmp = `filter=${f.prop}.${f.operator}.${f.value}`
      if(idx === 0) str += `?${tmp}`
      else str += `&${tmp}`;
      return str;
    }, '/endpoint')
  }
  getEndpoint(id?: string, query?: ISEFilter[]):
    Promise<IEndpointIDResponse | ISESearchResult> {
    let ep: string;
    if(query) {
      ep = this.filterBuilder(query);
    } else {
      ep = `/endpoint${id ? '/' + id: ''}`
    }
    return this.request(ep)
      .then(({ data }) => {
        if(data.SearchResult) return data.SearchResult;
        return data;
      });
  }
  deleteEndpoint(id: string) {
    return this.request.delete(`/endpoint/${id}`);
  }
}

let ise = new ISEErs({
  host: '198.18.133.27',
  user: 'ersadmin',
  pass: 'C1sco12345'
});

// ise.createEndPoint({
//   name: 'myNewEndpoint',
//   mac: '00:01:02:03:04:06',
//   desc: 'my description 2',
//   staticGroupAssignment: true
// }).then((result) => {
//   console.log(result)
// })
ise.getEndpoint(
//   null, [{
//   prop: 'mac',
//   operator: ISEQueryOperator.EQUALS,
//   value: '00:01:02:03:04:05'
// }]
).then(result => {
  console.log(JSON.stringify(result))
})
/*
ise.deleteEndpoint(
  'ca9e2430-82d4-11e9-8c82-005056b84efe'
).then(result => {
  // handle result as needed
  // expected status = 204
  // expected data = null/undefined
})
*/