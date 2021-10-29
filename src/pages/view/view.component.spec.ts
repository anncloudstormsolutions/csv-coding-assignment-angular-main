import {TestBed, waitForAsync} from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { BackendService } from 'src/services/backend.service';
import { ViewPageComponent } from './view.component';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                ViewPageComponent
            ],
            imports: [
                RouterTestingModule,
                MatDialogModule,
                MatSnackBarModule
            ],
            providers: [
                {provide: BackendService, useValue: new BackendService()}
            ]

        }).compileComponents();
    }));

    it('should create the app', (() => {
        const fixture = TestBed.createComponent(ViewPageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render title in a h2 tag', (() => {
        const fixture = TestBed.createComponent(ViewPageComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Tasks');
    }));
});
