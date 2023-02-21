import { SequelizeConfigService } from './config/sequelizeConfig.service'
import { FeedbackModule } from './feedback/feedback.module'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
import { databaseConfig } from './config/configuration'

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    FeedbackModule,
  ],
})
export class AppModule {}
