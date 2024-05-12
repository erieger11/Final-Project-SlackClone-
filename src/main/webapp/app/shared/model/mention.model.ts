import { IMessage } from 'app/shared/model/message.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IMention {
  id?: number;
  userName?: string;
  body?: string;
  message?: IMessage | null;
  userProfile?: IUserProfile | null;
}

export const defaultValue: Readonly<IMention> = {};
