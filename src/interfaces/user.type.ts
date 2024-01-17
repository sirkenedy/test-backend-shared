export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
  DELETE = 'DELETE',
}

export enum EmergencyContactType {
  ALL = 'ALL',
  PRIMARY = 'PRIMARY',
}

export const userTypes = [...new Set(Object.values(UserType))];

export const userStatuses = [...new Set(Object.values(UserStatus))];

export const emergencyContactTypes = [
  ...new Set(Object.values(EmergencyContactType)),
];
