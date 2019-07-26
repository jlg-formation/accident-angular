import { NiceDatePipe } from './nice-date.pipe';

describe('NiceDatePipe', () => {
  it('create an instance', () => {
    const pipe = new NiceDatePipe();
    expect(pipe).toBeTruthy();
  });
});
