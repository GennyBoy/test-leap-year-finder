#! /usr/bin/env node

import * as lyf from "@gennyboy/leap-year-finder";

// 正常系
console.log(`isCurrentYearLeap(): ${lyf.isCurrentYearLeap()}`);
console.log(`isLeapYear(2019): ${lyf.isLeapYear(2019)}`);
console.log(`isLeapYear(2020): ${lyf.isLeapYear(2020)}`);
console.log(`isLeapYear(1900): ${lyf.isLeapYear(1900)}`);
console.log(`getNextLeapYear(): ${lyf.getNextLeapYear()}`);
console.log(`getNextLeapYear(2019): ${lyf.getNextLeapYear(2019)}`);
console.log(`getNextLeapYear(2020): ${lyf.getNextLeapYear(2020)}`);
console.log(`getNextLeapYear(1899): ${lyf.getNextLeapYear(1899)}`);
console.log(`getPreviousLeapYear(): ${lyf.getPreviousLeapYear()}`);
console.log(`getPreviousLeapYear(2021): ${lyf.getPreviousLeapYear(2021)}`);
console.log(`getPreviousLeapYear(2020): ${lyf.getPreviousLeapYear(2020)}`);
console.log(`getPreviousLeapYear(1901): ${lyf.getPreviousLeapYear(1901)}`);
console.log(`getNextLeapYears(3): ${lyf.getNextLeapYears(3)}`);
console.log(`getNextLeapYears(5, 2019): ${lyf.getNextLeapYears(5, 2019)}`);
console.log(`getNextLeapYears(1, 2020): ${lyf.getNextLeapYears(1, 2020)}`);
console.log(`getNextLeapYears(3, 1897): ${lyf.getNextLeapYears(3, 1897)}`);
console.log(`getPreviousLeapYears(2): ${lyf.getPreviousLeapYears(2)}`);
console.log(`getPreviousLeapYears(6, 2021): ${lyf.getPreviousLeapYears(6, 2021)}`);
console.log(`getPreviousLeapYears(4, 2020): ${lyf.getPreviousLeapYears(4, 2020)}`);
console.log(`getPreviousLeapYears(4, 1905): ${lyf.getPreviousLeapYears(4, 1905)}`);
console.log(`getDateForLastDayOfFebruary(): ${lyf.getDateForLastDayOfFebruary()}`);
console.log(`getDateForLastDayOfFebruary(2020): ${lyf.getDateForLastDayOfFebruary(2020)}`);
console.log(`getDateForLastDayOfFebruary(2019): ${lyf.getDateForLastDayOfFebruary(2019)}`);
console.log(`getDateForNextLeapYearLastDayOfFebruary(): ${lyf.getDateForNextLeapYearLastDayOfFebruary()}`);
console.log(`getDateForPreviousLeapYearLastDayOfFebruary(): ${lyf.getDateForPreviousLeapYearLastDayOfFebruary()}`);

// エラー処理
console.log(`getPreviousLeapYears(20, 2021): ${lyf.getPreviousLeapYears(20, 2021)}`);
// console.log(`getPreviousLeapYears('20', 2021): ${lyf.getPreviousLeapYears('20', 2021)}`);
// console.log(`getPreviousLeapYears(-1, 2021): ${lyf.getPreviousLeapYears(-1, 2021)}`);