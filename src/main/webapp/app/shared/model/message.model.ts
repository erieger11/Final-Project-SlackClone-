import { IChannel } from 'app/shared/model/channel.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IMessage {
  id?: number;
  uploads?: string | null;
  pinned?: number | null;
  timestamp?: number | null;
  channel?: IChannel | null;
  userProfile?: IUserProfile | null;
}

export const defaultValue: Readonly<IMessage> = {};
