export interface IEndpointIDResponse {
  id: string;
  name: string;
  mac: string;
  staticGroupAssignment?: boolean;
  staticProfileAssignment?: boolean;
  description?: string;
  identityStore?: string;
  identityStoreId?: string;
  portalUser?: string;
  profileId?: string;
  customAttributes?: any;
}

export interface ISECreate {
  ERSEndPoint: {
    name: string;
    mac: string;
    staticGroupAssignment?: boolean;
    staticProfileAssignment?: boolean;
    description?: string;
    identityStore?: string;
    identityStoreId?: string;
    portalUser?: string;
    profileId?: string;
    customAttributes?: any;
  }
}

export interface ICreate {
  name: string;
  mac: string;
  staticGroupAssignment?: boolean;
  staticProfileAssignment?: boolean;
  desc?: string;
  identityStore?: string;
  identityStoreId?: string;
  portalUser?: string;
  profileId?: string;
  customAttributes?: any;
}