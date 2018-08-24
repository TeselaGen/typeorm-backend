import { Entity } from 'typeorm';

@Entity()
export class UserCustorResultModel {
    public totalResults: number;
    public results: any[];
}
