import { Training } from '../trainings/training.model';

export class TrainingTemplate {
    constructor(
        public _id: number, 
        public title: string,
        public description: string = '',
        public trainings: Training[] = []
    ){}
}