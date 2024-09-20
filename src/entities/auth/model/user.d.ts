declare global {
  enum PortalRoleEnum {
    ROLE_PORTAL_USER = "ROLE_PORTAL_USER",
    ROLE_PORTAL_ADMIN = "ROLE_PORTAL_ADMIN",
    ROLE_PORTAL_SUPERADMIN = "ROLE_PORTAL_SUPERADMIN",
  }
}

interface IUser {
  lname: string;
  fname: string;
  roles: PortalRoleEnum;
  email: string;
  phone_token?: string;
  avatar?: string;
  hashed_password: string;
  create_at?: Date;
  updated_account?: Date;
  br_date?: Date;
  document_id?: string;
  document_photo_link?: Array<string>;
  is_verify?: boolean;
}

type IAuthStoreState = {
  user: IUser | null;
  token: string | null;
  refreshToken: string | null;
};

type IAuthStoreAction = {
  addAuthorization: (user?: IUser, token: string, refreshToken: string) => void;
};

type IAuthStore = IAuthStoreState & IAuthStoreAction;

export { IAuthStore, IUser };
