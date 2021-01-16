import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcasAddPage } from './marcas-add.page';

describe('MarcasAddPage', () => {
  let component: MarcasAddPage;
  let fixture: ComponentFixture<MarcasAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
