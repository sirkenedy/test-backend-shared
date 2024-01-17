export enum IncidentType {
  ACCIDENT = 'ACCIDENT',
  EXPLOSION = 'EXPLOSION',
  KIDNAPPING = 'KIDNAPPING',
  FIRE = 'FIRE',
  THEFT = 'THEFT',
  ASSAULT = 'ASSAULT',
  OTHER = 'OTHER',
}

export const incidentTypes = [...new Set(Object.values(IncidentType))];
