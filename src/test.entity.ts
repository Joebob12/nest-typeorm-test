import {Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

@Entity()
export class Lesson {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bio: string;

}
