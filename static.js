class User {
    static id = 1;

    static cache = 'some cache value';
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.id =  User.id++
    }

    static CompareByAge(a, b) {
        return a.age - b.age;
    }

    static CompareBySalary(a, b) {
        return a.salary - b.salary;
    }

    static checkCache() {
        console.log('cache value', this.cache);
    }

    static hasCache() {
        this.checkCache();
    }

    static {
        console.log('initialized static one time only');
    }
}

const user1 = new User('user1', 20, 4000);
const user2 = new User('user2', 40, 1000);
const user3 = new User('user3', 30, 5000);

const userList  = [user1, user2, user3];
const abc  = [user1, user2, user3];
// userList.sort((a, b) => a.age - b.age);
abc.sort(User.CompareByAge);
console.log(abc);

userList.sort(User.CompareBySalary);
console.log(userList);