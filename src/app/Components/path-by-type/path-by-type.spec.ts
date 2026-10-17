import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathByType } from './path-by-type';

describe('PathByType', () => {
  let component: PathByType;
  let fixture: ComponentFixture<PathByType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathByType],
    }).compileComponents();

    fixture = TestBed.createComponent(PathByType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
