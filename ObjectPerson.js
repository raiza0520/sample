var emptyObject = {}; // object with no properties or methods

var person = { firstName: "John" }; // object with single property

// object with single method
var message = { 
                showMessage: function (val) { 
                            alert(val); 
                } 
            }; 

// object with properties & method
var person = { 
                firstName: "James", 
                lastName: "Bond", 
                age: 15, 
                getFullName: function () { 
                        return this.firstName + ' ' + this.lastName 
                }
            }; 