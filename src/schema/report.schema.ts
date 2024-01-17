import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  ReportStatus,
  ReporterType,
} from '../interfaces/report.type';

export type ReportDocument = HydratedDocument<Report>;

@Schema({ timestamps: true })
export class Report {
  @Prop({ index: true })
  name: string;

  @Prop({ required: true, index: true, unique: true })
  email: string;

  @Prop({ index: true })
  phone: string;

  @Prop({ index: true })
  reporterType: ReporterType;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  gender: string;

  @Prop()
  natureOfReport: string;

  @Prop({ index: true })
  details: string;

  @Prop({
    index: true,
    default: ReportStatus.OPENED,
  })
  status: ReportStatus;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
