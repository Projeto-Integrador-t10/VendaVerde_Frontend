import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  faLinkedin = faLinkedin
  faGithub = faGithub

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
  }
}