import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('increment')
  number: number;

  @Column()
  writter: string;

  @Column()
  title: string;

  @Column()
  contents: string;
}
