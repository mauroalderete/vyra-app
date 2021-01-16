import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcasDetailPage } from './marcas-detail.page';

describe('MarcasDetailPage', () => {
  let component: MarcasDetailPage;
  let fixture: ComponentFixture<MarcasDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
