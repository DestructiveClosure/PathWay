import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathForm } from './path-form';

describe('PathForm', () => {
  let component: PathForm;
  let fixture: ComponentFixture<PathForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PathForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
