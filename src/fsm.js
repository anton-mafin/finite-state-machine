class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
         if(config) {
            this.config = config;  
            this.initial = config.initial;
            this.current = this.initial;
            this.history = [this.initial];   
            this.l = 0; 
        }
       else 
            throw new Error();
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.current;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
       var flag = false;
        for (let st in this.config.states)
           if (st === state) {
               this.current = state;
               this.history.push(this.current);
               flag = true;
               this.localStorage = [];
           }
        if (!flag)
            throw new Error();
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        var flag = false;  
        for (let st in this.config.states[this.current])
            for (let tr in this.config.states[this.current].transitions)
                if (tr === event){
                    this.current = this.config.states[this.current].transitions[tr];
                    this.history.push(this.current);
                    flag = true;
                    this.localStorage = [];
                }
        if (!flag)
            throw new Error();
    }

    /**
     * Resets FSM state to start.
     */
    reset() {}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition h
     */
    clearh() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
