//requiredEmail
function requiredEmail() {
    this.name = 'requiredEmail';
    this.message = "required Email";
    this.errorCode=401;
}
//requiredEmail.prototype = new Error();

//notExist
function notExist(name,field) {
    this.name = 'notExist';
    this.message = "not exist "+name+" with this "+field;
    this.errorCode=404;
}
//notExist.prototype = new Error();

//requiredParameter
function requiredParameter(name) {
    this.name = 'requiredComplainer';
    this.message = name+" is required";
    this.errorCode=401;
}
//requiredParameter.prototype = new Error();
//requiredParameter.prototype = Object.create(Error.prototype);

//CollectionEmpty
function CollectionEmpty(name) {
    this.name = name+'CollectionEmpty';
    this.message = name+" collection is Empty";
    this.errorCode=404;
}
//CollectionEmpty.prototype = new Error();


module.exports = {
    requiredEmail:requiredEmail,
    notExist:notExist,
    requiredParameter:requiredParameter,
    CollectionEmpty:CollectionEmpty
}



