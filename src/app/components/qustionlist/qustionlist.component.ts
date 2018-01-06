import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Question} from '../../models/question';

@Component({
    selector: 'app-qustionlist',
    templateUrl: './qustionlist.component.html',
    styleUrls: ['./qustionlist.component.css']
})
export class QustionlistComponent implements OnInit {
    questions: Question[];

    constructor(public dataService:DataService) {

    }

    ngOnInit() {
        this.questions = this.dataService.getQuestions();
    }

}
