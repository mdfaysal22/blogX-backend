export type IUser = {
  name: string
  email: string
  password: string
  role?: string
}

export type IUserLogin = {
  email: string
  password: string
}
