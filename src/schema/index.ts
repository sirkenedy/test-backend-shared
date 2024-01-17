import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Incident,
  IncidentSchema,
} from './incident.schema';
import {
  Report,
  ReportSchema,
} from './report.schema';
import { User, UserSchema } from './user.schema';
import { DataLog, DataLogSchema } from '../datalogs/schema/data.log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: DataLog.name, schema: DataLogSchema }]),
    MongooseModule.forFeature([
      { name: Incident.name, schema: IncidentSchema },
    ]),
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
  ],
  providers: [User, DataLog, Incident, Report],
  exports: [MongooseModule, User, DataLog, Incident, Report], // Export the MongooseModule and models
})
export class SharedModule {}
