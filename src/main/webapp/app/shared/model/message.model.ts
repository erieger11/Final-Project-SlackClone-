import { IMention } from 'app/shared/model/mention.model';

export interface IMessage {
  id?: number;
  uploads?: string | null;
  pinned?: number | null;
  timestamp?: number | null;
  mentions?: IMention | null;
}

export const defaultValue: Readonly<IMessage> = {};
