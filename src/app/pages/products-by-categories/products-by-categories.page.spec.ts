import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsByCategoriesPage } from './products-by-categories.page';

describe('ProductsByCategoriesPage', () => {
  let component: ProductsByCategoriesPage;
  let fixture: ComponentFixture<ProductsByCategoriesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsByCategoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsByCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
