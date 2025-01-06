export interface Locker {
  name: string;
  description: string;
}

export interface LockerMap {
  [key: string]: Locker;
}