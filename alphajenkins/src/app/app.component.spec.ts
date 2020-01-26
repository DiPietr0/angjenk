import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach((() => {
    component = new AppComponent();  
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
    
  it('simple test', () => {
    expect(1 + 1).toEqual(2);
  });

});
