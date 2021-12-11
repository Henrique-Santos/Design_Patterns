// (1)
class Context {
    // (2)
    private strategy: Strategy;

    // (3)
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    // (4)
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    // (5)
    public doSomeBusinessLogic(): void {
        // ...

        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));

        // ...
    }
}

// (6)
interface Strategy {
    doAlgorithm(data: string[]): string[];
}

// (7)
class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

// (8)
const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
