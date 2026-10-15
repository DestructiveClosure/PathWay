import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathCard } from './path-card';

describe('PathCard', () => {
  let component: PathCard;
  let fixture: ComponentFixture<PathCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PathCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
