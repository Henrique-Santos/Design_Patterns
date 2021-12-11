// (1)
abstract class Component {
    protected parent: Component;

    // (2)    
    public setParent(parent: Component) {
        this.parent = parent;
    }

    public getParent(): Component {
        return this.parent;
    }
    
    // (3)
    public add(component: Component): void { }

    public remove(component: Component): void { }

    // (4)
    public isComposite(): boolean {
        return false;
    }

    // (5)
    public abstract operation(): string;
}

// (6)
class Leaf extends Component {
    public operation(): string {
        return 'Leaf';
    }
}

// (7)
class Composite extends Component {
    protected children: Component[] = [];

    // (8)
    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    // (9)
    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Branch(${results.join('+')})`;
    }
}

// (10)
function clientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

// (11)
const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

// (12)
const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');

// (13)
function clientCode2(component1: Component, component2: Component) {
    // ...

    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);

    // ...
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);