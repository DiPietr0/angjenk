import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;

  beforeEach(() => {
    component = new HelloComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('overAMillion', () => {
    it('should return blab bla', () => {
      expect(component.overAMillion(1000001)).toEqual('över en miljion');
    });

    it('should return blab bla', () => {
      expect(component.overAMillion(10)).toEqual('ej över en miljon')
    });
  });
});
