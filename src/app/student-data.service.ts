import {Student} from './student';
import {Injectable} from '@angular/core';
@Injectable()
export class StudentDataService {
  public student = new Student();
}
