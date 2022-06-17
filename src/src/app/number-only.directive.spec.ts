import { NumberOnlyDirective } from './number-only.directive';

describe('NumberOnlyDirective', () => {

  it('should create an instance', () => {
    const directive = new NumberOnlyDirective();
    const event = {keyCode : 13, target : {value : '100'}, key : '1'};
    directive.onkeypress(event);
    expect(directive).toBeTruthy();
  });

});
