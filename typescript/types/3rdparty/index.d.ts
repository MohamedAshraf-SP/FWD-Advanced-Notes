import _ from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    multiply(multiplier: number, multiplicand: number): number;
  }
}
// multiply  هنا تم تعريف الفنكشن  
// مكانتش متعرفه قبل م اضيف دول 
// ts config file  "typeRoots": ["./types"],      ,,, ex2 look at #3cxccx