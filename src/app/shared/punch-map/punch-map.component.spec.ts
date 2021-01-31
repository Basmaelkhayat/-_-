import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchMapComponent } from './punch-map.component';

describe('PunchMapComponent', () => {
    let component: PunchMapComponent;
    let fixture: ComponentFixture<PunchMapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PunchMapComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PunchMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
