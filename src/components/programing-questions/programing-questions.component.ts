import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-programing-questions',
  templateUrl: './programing-questions.component.html',
  styleUrls: ['./programing-questions.component.scss'],
})
export class ProgramingQuestionsComponent implements OnInit {
  myLinkedList: number[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // console.log(this.validateEmail('john.doe@gmail.com'));
    // console.log(this.validateEmail('john@doe@gmail.com'));
    // console.log(this.validateEmail('john@gmail.fc'));
    // this.initializeList([1, 8, 56, 87, 5, 4, 81]);
    // console.log(this.getModifiedList(57));
    // console.log(this.isValidBracketSequence('()[]{}'));
    // console.log(this.isValidBracketSequence('([{}])'));
    // console.log(this.isValidBracketSequence('('));
    // console.log(this.isValidBracketSequence('[(])'));
    // console.log(this.isValidBracketSequence('{[]}]'));
    // this.readCsvData('Hearts', 'Lion', 'Mango');
  }

  // problem 1 Fns and solution
  validateEmail(emailStr: string) {
    // trim extra spaces from the edge string
    emailStr = emailStr.trim();
    // check for the valid string input
    if (emailStr.length <= 256 && emailStr != '') {
      // check first part of email address isn't empty and doesn't have two .. followed by each other
      // checking for @ char position and count ( geting array of 2 strings => we have 1 @ char in the string )
      let emailParts = emailStr.split('@');
      if (
        emailParts[0] != '' &&
        !emailParts[0].includes('..') &&
        emailStr[0] != '@' &&
        emailStr[emailStr.length - 1] != '@' &&
        emailParts.length == 2
      ) {
        // checking . exist and it's position isn't directley after the @, and there is no two .. followed by each other
        if (
          emailParts[1].indexOf('.') > -1 &&
          emailParts[1][0] != '.' &&
          !emailParts[1].includes('..')
        ) {
          // check extension validation (consist of 2 or 3 chacters)
          let splitedByPeriod = emailParts[1].split('.');
          if (
            splitedByPeriod[splitedByPeriod.length - 1].length == 2 ||
            splitedByPeriod[splitedByPeriod.length - 1].length == 3
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // problem 2 Fns and solution
  readCsvData(suit: string, animal: string, fruit: string) {
    // reading csv file data
    this.http.get('assets/prediction.csv', { responseType: 'text' }).subscribe(
      (data) => {
        let csvToRowArray = data.split('\n');
        let myProbaiblityData = {
          suits: { totalCount: 0, trueCount: 0 },
          animal: { totalCount: 0, trueCount: 0 },
          fruit: { totalCount: 0, trueCount: 0 },
        };
        // start reading the data lines and skiping the 1st one, then checking for matching records and updating
        // my probability data based on results
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(',');
          if (row[0] == suit) {
            myProbaiblityData.suits.totalCount += 1;
            row[3] == 'True' ? (myProbaiblityData.suits.trueCount += 1) : null;
          }
          if (row[1] == animal) {
            myProbaiblityData.animal.totalCount += 1;
            row[3] == 'True' ? (myProbaiblityData.animal.trueCount += 1) : null;
          }
          if (row[2] == fruit) {
            myProbaiblityData.fruit.totalCount += 1;
            row[3] == 'True' ? (myProbaiblityData.fruit.trueCount += 1) : null;
          }
        }
        // console.log(myProbaiblityData);
        // calculate and return the final %
        console.log(this.calcProbability(myProbaiblityData));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  calcProbability(dataResults) {
    let Probability = 0;
    // looping over data results to calculte the probabiltiy using the below rule
    Object.values(dataResults).forEach((row) => {
      if (row['totalCount'] != 0) {
        Probability += row['trueCount'] / row['totalCount'];
      }
    });
    // deviding the total number by row data numbers then multiply it by 100 to the %
    Probability = (Probability / Object.keys(dataResults).length) * 100;
    return Probability.toFixed(1) + '%';
  }

  // problem 3 Fns and solution
  addNode(x: number) {
    // pushing a node into the array list
    this.myLinkedList.push(x);
  }

  removeNodes(x) {
    // filtering the nodes and keeping only the numbers thta are less than the input number
    for (let i = this.myLinkedList.length; i > 0; i--) {
      if (this.myLinkedList[i - 1] > x) {
        this.myLinkedList.splice(i - 1, 1);
      }
    }
  }

  initializeList(list: number[]) {
    this.myLinkedList = list;
  }

  getModifiedList(x: number) {
    this.removeNodes(x);
    return this.myLinkedList;
  }

  // problem 4 Fns and solution
  isValidBracketSequence(bracketsStr: string) {
    debugger;
    let bracketMap = { ')': '(', '}': '{', ']': '[' };
    let bracketSequence = [];
    // remove all whiteSpaces from the input, then generating an array of chars from it
    let stringBrackets = Array.from(bracketsStr.replace(/\s/g, ''));

    // making sure that there is at least 1 opening/closing bracket, and for each opening bracket a close bracket exist
    if (stringBrackets.length > 1 && stringBrackets.length % 2 == 0) {
      // start looping over the input chars
      for (let i = 0; i < stringBrackets.length; i++) {
        // adding the opened brackets into my list in order, else if a closing bracket check if it is the right
        // closing bracket and removing it from the list( if not break my loop and return false), else it's invalid char => return false
        if (
          stringBrackets[i] == '(' ||
          stringBrackets[i] == '{' ||
          stringBrackets[i] == '['
        ) {
          bracketSequence.push(stringBrackets[i]);
        } else if (
          stringBrackets[i] == ')' ||
          stringBrackets[i] == '}' ||
          stringBrackets[i] == ']'
        ) {
          if (
            bracketSequence[bracketSequence.length - 1] ==
            bracketMap[stringBrackets[i]]
          ) {
            bracketSequence.splice(bracketSequence.length - 1, 1);
            continue;
          } else {
            break;
          }
        } else {
          return false;
        }
      }
      // validation correct and bracket sequence has no more opened brackets
      if (bracketSequence.length == 0) {
        return true;
      }
    }
    return false;
  }
}
