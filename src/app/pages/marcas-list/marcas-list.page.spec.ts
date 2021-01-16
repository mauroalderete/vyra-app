import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcasListPage } from './marcas-list.page';

describe('MarcasListPage', () => {
  let component: MarcasListPage;
  let fixture: ComponentFixture<MarcasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
