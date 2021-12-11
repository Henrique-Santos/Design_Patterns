// (1)
class Singleton {
    // (2)
    private static instance: Singleton;

    // (3)
    private constructor() { }
    // (4)    
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    // (5)
    public someBusinessLogic() {
        // ...
    }
}

// (6)
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
