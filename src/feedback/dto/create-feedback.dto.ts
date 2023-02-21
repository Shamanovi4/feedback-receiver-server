import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateFeedback {
  @IsNotEmpty()
  readonly name: string

  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly message: string
}
