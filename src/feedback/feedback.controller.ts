import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { CreateFeedback } from './dto/create-feedback.dto'
import { UpdateFeedback } from './dto/update-feedback.dto'
import { FeedbackService } from './feedback.service'

@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAllFeedbacks() {
    return this.feedbackService.findAll()
  }

  @Get(':id')
  getOneFeedback(@Param('id') id: string) {
    return this.feedbackService.findOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createFeedback(@Body() createFeedback: CreateFeedback) {
    return this.feedbackService.create(createFeedback)
  }

  @Patch(':id')
  updateFeedback(
    @Body() @Param('id') id: string,
    updateFeedback: UpdateFeedback,
  ) {
    return this.feedbackService.update(id, updateFeedback)
  }
}
