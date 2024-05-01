import { IMessage } from 'app/shared/model/message.model';
import { IWorkspace } from 'app/shared/model/workspace.model';
import { IChannel } from 'app/shared/model/channel.model';

export interface IUserProfile {
  id?: number;
  name?: string;
  email?: string;
  timezone?: number | null;
  phone?: number | null;
  messages?: IMessage | null;
  workspaces?: IWorkspace[] | null;
  channels?: IChannel[] | null;
}

export const defaultValue: Readonly<IUserProfile> = {};
