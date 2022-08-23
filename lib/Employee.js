class employees {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    Name() {
        return this.name;
    }

    Id() {
        return this.id;
    }

    Email() {
        return this.email;
    }
}

module.exports = employees; 