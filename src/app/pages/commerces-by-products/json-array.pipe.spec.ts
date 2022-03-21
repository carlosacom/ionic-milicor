import { JsonArrayPipe } from './json-array.pipe';

describe('JsonArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
