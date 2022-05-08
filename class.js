// Class, constructor, create object from class
class Student {
    constructor(sId, sName, sAge) {
        this.id = sId;
        this.name = sName;
        this.roll = sAge;
        this.school = "SamasPara B/L High School";
    }
}
const student1 = new Student(1, "Rahim", 17);
const student2 = new Student(2, "Rabbil", 16);
console.log(student1, student2);