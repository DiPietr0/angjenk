import { ByeComponent } from './bye.component';

describe('ByeComponent', () => {
  let component: ByeComponent;

  beforeEach((() => {
    component = new ByeComponent();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add should add numbers', () => {
    const nr1 = 2;
    const nr2 = 3;
    expect(component.add(nr1, nr2)).toEqual(5);
  });
  
});
