var rando = require('../lib/random-generator');

describe('Random Person Chooser', ()=> {
  test('returns a random name', ()=> {
    var name = rando.randomName();
    expect(name).toBeTruthy();
    expect(typeof name).toBe('string');
    expect(name.length).toBeGreaterThan(0);
  });
  test('no crash on first name', ()=> {
    var zeroGenerator = () => {
      return 0;
    }
    var name = rando.randomName(zeroGenerator);
    expect(name).toBe('Rob');
  });
  test('no crash in middle', ()=> {
    var midGenerator = () => {
      return .5;
    }
    var name = rando.randomName(midGenerator);
    expect(name).toBeTruthy();
    expect(typeof name).toBe('string');
    expect(name.length).toBeGreaterThan(0);
  });
  test('no crash on last name', ()=> {
    var oneishGenerator = () => {
      return .999;
    }
    var name = rando.randomName(oneishGenerator);
    expect(name).toBe('Dalton');
  });
})
