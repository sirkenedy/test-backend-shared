import { Request } from 'express';
import { User } from 'src/components/users/schema/user.schema';

type customReq = {
  user: User & any;
  traceId: string;
  userIpAddress: string;
};

export type ApiReq = Request & customReq & any;

export enum ReqType {
  MOBILE = 'MOBILE',
  WEB = 'WEB',
}
