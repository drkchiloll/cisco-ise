import { ISELink } from './';

export interface IUser {
  id: string;
  name: string;
  enabled: boolean;
  password: string;
  firstName: string;
  lastName: string;
  changePassword: boolean;
  includeSystemAlarmsInEmail: boolean;
  externalUser: boolean;
  inactiveAccountNeverDisabled: boolean;
  adminGroups: string;
  customAttributes: {}
  link: ISELink;
}