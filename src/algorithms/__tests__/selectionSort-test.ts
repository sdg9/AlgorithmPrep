import { selectionSort } from '../selectionSort';
describe('selectionSort', () => {
  it('should sort the list', () => {
    expect(selectionSort([1, 5, 10, 7, -1])).toEqual([-1, 1, 5, 7, 10]);
  });
});
