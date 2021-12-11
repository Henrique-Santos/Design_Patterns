// (1)
abstract class Creator {
    // (2)
    public abstract factoryMethod(): Product;
    // (3)
    public someOperation(): string {
        // (4)
        const product = this.factoryMethod();
        // (5)
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

// (6)
class ConcreteCreator1 extends Creator {
    // (7)
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

// (8)
interface Product {
    operation(): string;
}

// (9)
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

// (10)
function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

// (11)
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
