import { Feedback } from './models/feedback.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { Module } from '@nestjs/common'
import { FeedbackService } from './feedback.service'
import { FeedbackController } from './feedback.controller'

@Module({
  imports: [SequelizeModule.forFeature([Feedback])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
