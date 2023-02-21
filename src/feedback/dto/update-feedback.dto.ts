import { IsEmail, IsNotEmpty } from 'class-validator'

export class UpdateFeedback {
  @IsNotEmpty()
  readonly name: string

  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly message: string
}
