import { Prop, Schema, raw, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserStatus, UserType } from '../interfaces/user.type';

export type UserDocument = HydratedDocument<User>;

export type Contact = {
  contactId: string;
  name: string;
  phoneNumber: string;
  relationship: string;
  email: string;
};

export const emergencyContactRawSchema = {
  contactId: { type: String },
  name: { type: String },
  phoneNumber: { type: String },
  relationship: { type: String },
  email: { type: String },
};

@Schema({ timestamps: true })
export class User {
  @Prop({ index: true })
  firstName: string;

  @Prop({ index: true })
  lastName: string;

  @Prop({ required: true, index: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  photo: string;

  @Prop()
  age: number;

  @Prop({ index: true })
  phone: string;

  @Prop({ index: true, unique: true })
  userHandle: string;

  @Prop({ index: true })
  gender: string;

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

  @Prop({ index: true })
  deviceId: string;

  @Prop({ index: true })
  deviceToken: string;

  @Prop({
    index: true,
    default: UserType.USER,
  })
  role: UserType;

  @Prop({
    index: true,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Prop({ index: true, default: false })
  emailVerification: boolean;

  @Prop({ index: true, default: false })
  hasReportedIncident: boolean;

  @Prop({ type: [raw(emergencyContactRawSchema)], default: [] })
  contacts: Contact[];

  @Prop(raw(emergencyContactRawSchema))
  primaryContact: Contact;
}

export const UserSchema = SchemaFactory.createForClass(User);
