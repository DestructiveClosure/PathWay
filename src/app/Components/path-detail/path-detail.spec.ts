import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathDetail } from './path-detail';

describe('PathDetail', () => {
  let component: PathDetail;
  let fixture: ComponentFixture<PathDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PathDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
