export enum ReporterType {
  MANDATED_REPORTER = 'MANDATED_REPORTER',
  SURVIVOR = 'SURVIVOR',
  ALLEGED_PERPETRATOR = 'ALLEGED_PERPETRATOR',
}

export enum ReportStatus {
  OPENED = 'OPENED',
  ASSIGNED = 'ASSIGNED',
  SUSPENDED = 'SUSPENDED',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

export const reporterTypes = [...new Set(Object.values(ReporterType))];

export const reportStatuses = [...new Set(Object.values(ReportStatus))];
