import { Colors } from '../constants/Colors';

describe('Colors constants', () => {
  it('has light theme colors', () => {
    expect(Colors.light).toBeDefined();
    expect(Colors.light.background).toBe('#fff');
  });

  it('has dark theme colors', () => {
    expect(Colors.dark).toBeDefined();
    expect(Colors.dark.background).toBe('#151718');
  });
});
