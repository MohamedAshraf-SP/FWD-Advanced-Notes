// ├── node_modules
// ├── spec
// │      └── support
// │           └── jasmine.json
// ├── src
// │     ├──  tests
// │     │     ├── helpers
// │     │     │      └── reporter.ts
// │     │     └── indexSpec.ts
// │     └── index.ts
// ├── package-lock.json
// ├── package.json
// └── tsconfig.json


/*
#2

must build project then test with jasmin
*/

// /*
// #3
// function to be tested  
    const myFunc = (): boolean => {
        return true;
    };
    
    export default myFunc;

// */

/*
#4
 jasmine syntax 

    describe(“suite description”, () => {
        it(“describes the spec”, () => {
            const myVar = true;
            expect(myVar).toBe(true);
        });
        }); 
*/


/*
#5 
    .toEqual(expected value)checks if the tested object is the same object

*/

/*
# 6
    --.toBeTruthy()passes when
        The expectation has any non-zero value
        The expectation evaluates to true
    --.toBeFalsy()passes when the value is:
                0
                '' (an empty string)
                undefined
                null
                NaN
        If you just need the Boolean value of false, use .toEqual()

*/

/*
#7 
         Comparison  Test	   : A type of test that compares strings, numbers, objects, or arrays
        Numerical Matchers Test:	A test of numerical values within a specified range of the expected value
        Spec:	An individual test
        Suite:	A group of related tests
        Truthiness:	When a conditional proves to be truth-like such as the boolean true or a condition being true, or a value not equal to 0, NaN, undefined, null, or empty.

*/

/*
#8


*/
