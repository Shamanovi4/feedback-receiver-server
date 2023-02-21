import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateFeedback } from './dto/create-feedback.dto'
import { UpdateFeedback } from './dto/update-feedback.dto'
import { Feedback } from './models/feedback.model'

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback)
    private feedbackModel: typeof Feedback,
  ) {}

  async findAll(): Promise<Feedback[]> {
    return this.feedbackModel.findAll()
  }

  findOne(id: string): Promise<Feedback> {
    return this.feedbackModel.findOne({
      where: {
        id,
      },
    })
  }

  create(createFeedback: CreateFeedback): Promise<Feedback> {
    const feedback = new Feedback()

    feedback.name = createFeedback.name
    feedback.email = createFeedback.email
    feedback.message = createFeedback.message

    return feedback.save()
  }

  update(
    id: string,
    updateFeedback: UpdateFeedback,
  ): Promise<[affectedCount: number, affectedRows: Feedback[]]> {
    return this.feedbackModel.update(
      { ...updateFeedback },
      {
        where: {
          id,
        },
        returning: true,
      },
    )
  }

  async delete(id: string): Promise<void> {
    const feedback = await this.findOne(id)
    await feedback.destroy
  }
}
