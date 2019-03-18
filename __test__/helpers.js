function attempt(callback){
    try {
        return callback();
    } catch (error) {
        return error;
    }
}

function unique(list) {
    return Array.from(new Set(list));
}

var ONE_MILLISECOND = 1;

var ONE_SECOND = ONE_MILLISECOND * 1000;

module.exports = {
    attempt: attempt,
    unique: unique,
    ONE_MILLISECOND: ONE_MILLISECOND,
    ONE_SECOND: ONE_SECOND
};