import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IWorkspace {
  id?: number;
  name?: string;
  status?: string | null;
  members?: IUserProfile[] | null;
}

export const defaultValue: Readonly<IWorkspace> = {};
