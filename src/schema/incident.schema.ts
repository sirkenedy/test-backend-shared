import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { UserDocument } from './user.schema';

export type IncidentDocument = HydratedDocument<Incident>;

@Schema({ timestamps: true })
export class Incident {
  @Prop({ index: true, required: true })
  title: string;

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  })
  location: {
    type: string;
    coordinates: number[];
  };

  @Prop({ index: true, required: true })
  natureOfIncident: string;

  @Prop({ index: true, default: true })
  active: boolean;

  @Prop({ required: true, index: true })
  description: string;

  @Prop({ required: true })
  media: string[];

  @Prop({ required: true, index: true })
  links: string[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: UserDocument;
}

export const IncidentSchema = SchemaFactory.createForClass(Incident);
IncidentSchema.index({ location: '2dsphere' });
