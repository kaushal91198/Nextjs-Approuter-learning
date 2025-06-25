export interface ToastInterface {
  message: string | null;
  id: number;
}


export interface UserState {
  user: any;
  isAuthenticated: boolean;
  redirectUrl?: string
}