"use strict";

export default class cpf {
    format(input) {
        if(input === undefined) {
            return '';
        }

        let output;
        let inputChars = input.toString();
        

        if(inputChars.length === 11) {
            output = inputChars.substr(0,3) + 
                "." +
                inputChars.substr(3,3) + 
                "." +
                inputChars.substr(6,3) + 
                "-" +
                inputChars.substr(9,2);
        } else {
            // Fallback if not a valid string
            output = input;
        }

        return output;
    }

    validate(input) {
        let result = this.format(input);

        if(result === '') {
            return false;
        }
        
        return result !== input;
    }
}