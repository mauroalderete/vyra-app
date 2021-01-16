import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcasEditPage } from './marcas-edit.page';

describe('MarcasEditPage', () => {
  let component: MarcasEditPage;
  let fixture: ComponentFixture<MarcasEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
