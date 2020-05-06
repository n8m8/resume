import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private beg: number = 3.5;
  private begColor: string = 'black';

  private inter: number = 4;
  private interColor: string = 'blue';

  private adv: number = 4.5;
  private advColor: string = 'green';

  cloudOptions: CloudOptions = {
      // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
      width: 0.8,
      // height: 500,
      overflow: false,
      step: 2
  };

  cloudData: CloudData[] = [
    {
      text: 'SQL',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'Database Design',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'C#',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: '.NET Core',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'Git / Version Control',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'Angular',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'Unity3D',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'JavaScript',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'JQuery',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'HTML',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'CSS',
      weight: this.inter,
      // link: 'https://google.com',
      color: this.interColor
    },
    {
      text: 'Object Oriented Programming',
      weight: this.adv,
      // link: 'https://google.com',
      color: this.advColor
    },
    {
      text: 'Web Services / Web Frameworks',
      weight: this.adv,
      // link: 'https://google.com',
      color: this.advColor
    },
    {
      text: 'Java',
      weight: this.adv,
      // link: 'https://google.com',
      color: this.advColor
    },
    {
      text: 'SailPoint IdentityIQ',
      weight: this.adv,
      // link: 'https://google.com',
      color: this.advColor
    },
    {
      text: 'Python',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'Flask',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'Spring',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'MongoDB',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'Azure DevOps',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'PCF',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'Swift',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'AngularJS',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'Node.JS',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'ASP.NET',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
    {
      text: 'TypeScript',
      weight: this.beg,
      // link: 'https://google.com',
      color: this.begColor
    },
  ];

  public advancedSkills = [
    "Object Oriented Programming",
    "Web Services / Web Frameworks",
    "Java",
    "SailPoint IdentityIQ"
  ]

  public interSkills = [
    "SQL / Database Design",
    "C#",
    ".NET Core",
    "Microservice Architecture",
    "Git / Version Control",
    "Angular",
    "Unity3D",
    "JavaScript",
    "HTML",
    "CSS"
  ]

  public introSkills = [
    "Python",
    "Flask",
    "Spring",
    "MongoDB",
    "Azure DevOps",
    "PCF",
    "Swift",
    "AngularJS",
    "Node.JS",
    "ASP.NET",
    "TypeScript"
  ]

  constructor() { }

  ngOnInit() {

  }

}
