import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {QustionlistComponent} from './components/qustionlist/qustionlist.component';
import {DataService} from './services/data.service';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        QustionlistComponent,
        QuestionComponent,
        AddQuestionComponent
    ],
    imports: [
        BrowserModule

    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
