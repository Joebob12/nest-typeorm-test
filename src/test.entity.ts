import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Lesson {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bio: string;

}
