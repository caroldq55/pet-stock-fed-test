import selectors from '../selectors';
import {productList, filteredList, filter} from './fixtures';

it("should filter by type", () => {
    const result = selectors(productList, filter);
    expect(result).toEqual(filteredList);
});
