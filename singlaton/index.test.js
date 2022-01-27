import Counter from './singlaton.js'

test('Incrementing 1 time should be 1', () => {
 Counter.increamentCount();
 expect(Counter.getCount()).toBe(1)
});

test('Incrementing 4 time should be 4', () => {
    Counter.increamentCount();
    Counter.increamentCount();
    Counter.increamentCount();
    expect(Counter.getCount()).toBe(4)
   });
//    
test('decrementing 1 time should be 3', () => {
    Counter.decrementCount();
    expect(Counter.getCount()).toBe(3)
   });

