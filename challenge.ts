import  assert  from  'assert';

class BankCustomer {
    private name: string;
    private cardCode: string;

    constructor(name: string, cardCode: string) {
        this.name = name;
        this.cardCode = cardCode;
    }

    public getName(): string {
        return this.name;
    }

    public verifyPinInput(input: string): boolean {
        return input === this.cardCode;
    }
}

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));