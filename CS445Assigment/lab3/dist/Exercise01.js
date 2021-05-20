"use strict";
/**
 * function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function(year) {
         console.log(`Graduating ${this.dept} ${year} students`);
    }
}
var miu = new Univeristy("MIU", "Computer Science");
miu.graduation(2019);
 */
function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log(`Graduating ${this.dept} ${year} students`);
    };
}
let miu = new University(12345, "Computer Science");
miu.graduation(2019);
