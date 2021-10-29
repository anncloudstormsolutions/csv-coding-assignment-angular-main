import {TestBed, waitForAsync} from '@angular/core/testing';
import { BackendService } from 'src/services/backend.service';
import {AppComponent} from './app.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [RouterTestingModule],
            providers: [
                {provide: BackendService, useValue: new BackendService()}
            ]

        }).compileComponents();
    }));

    it('should create the app', (() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
