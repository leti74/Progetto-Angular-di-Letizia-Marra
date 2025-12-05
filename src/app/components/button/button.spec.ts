import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';
import { By } from '@angular/platform-browser';

describe('ButtonComponent (Signals)', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button] 
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;

   
    component.label = (() => 'Click Me') as any;
    component.icon = (() => 'add') as any;
    component.type = (() => 'submit') as any;

    fixture.detectChanges();
  });

  it('should create the button component', () => {
    expect(component).toBeTruthy();
  });

  it('should display label and icon correctly', () => {
    const buttonEl = fixture.debugElement.query(By.css('button'));
    expect(buttonEl.nativeElement.textContent).toContain('Click Me');

    const iconEl = fixture.debugElement.query(By.css('mat-icon'));
    expect(iconEl.nativeElement.textContent).toBe('add');
  });

  it('should emit btnClick when button is clicked', () => {
    spyOn(component.btnClick, 'emit');

    const buttonEl = fixture.debugElement.query(By.css('button'));
    buttonEl.nativeElement.click();

    expect(component.btnClick.emit).toHaveBeenCalled();
  });

  it('should apply the correct type to the button', () => {
    const buttonEl = fixture.debugElement.query(By.css('button'));
    expect(buttonEl.nativeElement.type).toBe('submit');
  });
});
