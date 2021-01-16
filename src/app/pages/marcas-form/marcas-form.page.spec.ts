import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcasFormPage } from './marcas-form.page';

describe('MarcasFormPage', () => {
  let component: MarcasFormPage;
  let fixture: ComponentFixture<MarcasFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
