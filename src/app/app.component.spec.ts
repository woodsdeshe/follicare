import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'follicare-f'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('follicare-f');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('follicare-f app is running!');
  });

  describe('RegisterComponent', () => {
    it('should register a new user', () => {
      expect(register(newUser)).toBeTruthy();
    })
  });
});
