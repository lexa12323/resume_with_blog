import { yearsDiff } from "./yearsDiff"

it('yearsDiff should be 0' , () => {
    expect(yearsDiff(new Date(), new Date())).toBe(0);
});

it('yearsDiff should be 2' , () => {
    expect(yearsDiff('2018-05-01', '2020-01-01')).toBe(2);
});