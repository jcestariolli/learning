// creating object - so I can create multiple emmitters
function Emitter() {
    this.events = {

    };
}

Emitter.prototype.on = function(type, listener) {
    // validates if the event exist, or fill wieth an empty variable
    this.events[type] = this.events[type] || [];
    // pushes the listener to the event
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

module.exports = Emitter;