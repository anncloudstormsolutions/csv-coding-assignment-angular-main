import {TestBed, waitForAsync} from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { BackendService } from 'src/services/backend.service';
import { DetailPageComponent } from './detail.component';

describe('DetailComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                DetailPageComponent
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

    it('should create the component', (() => {
        const fixture = TestBed.createComponent(DetailPageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render title in a h2 tag', (() => {
        const fixture = TestBed.createComponent(DetailPageComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Task Detail');
    }));
});
