// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase(); // Modify customerName to uppercase
    } else {
        console.log('customerName is not a string or is undefined.');
    }
}

// Function to set the best customer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare a global variable bestCustomer and assign it a value
}

// Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer; // Assign a new value to the global variable bestCustomer
}

// Function to attempt changing the constant value
function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.'); // Throw an error when trying to reassign a constant
}

// Test cases
describe('Fix the Scope', function() {
    describe('declare customerName to be bob in global scope', function() {
        it('returns the customerName', function() {
            expect(window.customerName).to.equal('bob');
        });
    });

    describe('upperCaseCustomerName()', function() {
        it('modifies the customerName variable', function() {
            expect(window.customerName).to.equal('bob');

            upperCaseCustomerName();

            expect(window.customerName).to.equal('BOB');
        });
    });

    describe('setBestCustomer()', function() {
        it('setBestCustomer', function() {
            expect(window.bestCustomer).to.equal(undefined);

            setBestCustomer();

            expect(window.bestCustomer).to.equal('not bob');
        });
    });

    describe('overwriteBestCustomer()', function() {
        it('overwrites the best customer', function() {
            overwriteBestCustomer('maybe bob');

            expect(window.bestCustomer).to.equal('maybe bob');
        });
    });

    describe('changeLeastFavoriteCustomer()', function() {
        it('unsuccessfully tries to reassign the least favorite customer', function() {
            expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
        });
    });
});

