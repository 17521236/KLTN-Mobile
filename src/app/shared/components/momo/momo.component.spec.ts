import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MomoComponent } from './momo.component';

describe('MomoComponent', () => {
  let component: MomoComponent;
  let fixture: ComponentFixture<MomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
