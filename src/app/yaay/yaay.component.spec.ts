import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaayComponent } from './yaay.component';

describe('YaayComponent', () => {
  let component: YaayComponent;
  let fixture: ComponentFixture<YaayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
