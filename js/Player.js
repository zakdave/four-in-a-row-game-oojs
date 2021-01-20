class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
    
    /**
     * @returns {Array} Array of all a player's token objects whose dropped
     * property equals false
     */
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
        
    }

    /**
     * @returns {objects} Object of first token in the unused token array
     */
    get activeToken() {
        return this.unusedTokens[0];
    }

    /**
     * 
     * @param {integer} num - Number of token objects to be created
     */

    createTokens(num) {
        const tokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    /**
     * Check if a player has nay undropped tokens left
     * @return {Boolean}
     */
    checkTokens() {
        return this.unusedTokens.length == 0 ? false: true;
    }
}