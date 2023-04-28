import { Component } from '@angular/core';

interface Workers {
  [key: string]: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proctichna26';

  numbers = [2, 1, 4, 3, 5];

  reverseNumbers() {
    this.numbers = this.numbers.reverse();
  }

  sortNumbers() {
    this.numbers.sort();
  }

  languages = ['html', 'css', 'js', 'php'];

  changeLang(index: number) {
    this.languages[index] += '+';
  }

  users = ['Микола', 'Василь', 'Петро'];
  newUsers = ['Аня', 'Валя', 'Маша'];

  addUser() {
    if (this.newUsers.length > 0) {
      const newUser = this.newUsers.shift();
      if (newUser !== undefined) {
        this.users.push(newUser);
      }
      if (this.newUsers.length === 0) {
        this.users.sort();
      }
    }
  }

  tablenumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  workers: Workers = {
    Україна: ['Київ', 'Львів'],
    Польща: ['Варшава', 'Лодзь'],
    Великобританія: ['Лондон', 'Манчестер'],
  };
  
}
