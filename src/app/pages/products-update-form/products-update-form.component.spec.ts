import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormUpdateComponent} from './products-update-form.component';

describe('ProductsUpdateFormComponent', () => {
  let component: ProductsFormUpdateComponent;
  let fixture: ComponentFixture<ProductsFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFormUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
