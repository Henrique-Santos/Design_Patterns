// (1)
interface Component {
    operation(): string;
}

// (2)
class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

// (3)
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    // (4)
    public operation(): string {
        return this.component.operation();
    }
}

// (5)
class ConcreteDecoratorA extends Decorator {
    // (6)
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

// (7)
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

// (8)
function clientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

// (9)
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

// (10)
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
