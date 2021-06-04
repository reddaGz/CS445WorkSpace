class User {
    constructor(name) {
        this.name = name;
    }
    logger(){
      return this.name;
    }
}

class DecoratedUser {
    constructor(user, street, city) {
        this.user = user;
        this.street = street;
        this.city = city;
    }
    logger() {
        let info="Decorated User: " + user.logger() + ", " +
        this.street + ", " + this.city;
        console.log(info);
        return info;
    };
}

var user = new User("Kelly");

var decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();