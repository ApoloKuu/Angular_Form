import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private enrollmentService: EnrollmentService
  ) {
  }
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true
    } else {
      this.topicHasError = false
    }
  }

  onSubmit(userForm : any) {
    console.log(userForm)
    this.submitted = true
    this.enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('successs', data),
        err => this.errorMsg = err.statusText
      )
  }

  userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
}
