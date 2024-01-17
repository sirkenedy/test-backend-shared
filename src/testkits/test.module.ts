import { Module } from '@nestjs/common';
import { SharedModule } from '../schema';
import { DataLogsModule } from '../../datalogs/data.logs.module';
import { AuthModule } from '../../components/auth/auth.module';
import { UsersModule } from '../../components/users/users.module';
import { ReportsModule } from '../../components/reports/reports.module';
import { IncidentsModule } from '../../components/incidents/incidents.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.TEST_MONGODB_URI),
    SharedModule,
    DataLogsModule,
    AuthModule,
    UsersModule,
    ReportsModule,
    IncidentsModule,
  ],
  exports: [
    DataLogsModule,
    AuthModule,
    UsersModule,
    ReportsModule,
    IncidentsModule,
    SharedModule,
  ],
})
export class TestModule {}
