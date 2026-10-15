import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathList } from './path-list';

describe('PathList', () => {
  let component: PathList;
  let fixture: ComponentFixture<PathList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathList],
    }).compileComponents();

    fixture = TestBed.createComponent(PathList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
