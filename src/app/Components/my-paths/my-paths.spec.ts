import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPaths } from './my-paths';

describe('MyPaths', () => {
  let component: MyPaths;
  let fixture: ComponentFixture<MyPaths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPaths],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPaths);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
