import { Table, Model, Column } from 'sequelize-typescript'

@Table
export class Feedback extends Model {
  @Column
  name: string

  @Column
  email: string

  @Column
  message: string
}
