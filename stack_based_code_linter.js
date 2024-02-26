// This algorithm checks js code for proper use of braces. This is meant as practice and introduction to the use of stacks and as always credit where it is due: A Common Sense Guide to Data Structures and Algorithms and ChatGPT-4 for syntax issues.

class linter {
    constructor() {
        this.stack = [];
    }
    lint(text) {
        for (let i = 0; i < text.length; i++) {
            let element = text[i];
            if (this.is_opening_brace(element)) {
                this.stack.push(element)
            } else if (this.is_closing_brace(element)) {
                let popped_opening_brace = this.stack.pop()
                if (!popped_opening_brace) {
                    return `${element} doesn't have opening brace`
                }
                if (this.is_not_a_match(popped_opening_brace, element)) {
                    return `${element} has mismatched braces`
                }
            }
        }
        if (this.stack.length > 0) {
            return "The stack doesn't have a closing brace"
        }
        return 'All Good'
    }

    is_opening_brace(char) {
        const opening_braces = ['(', '[', '{'];
        return opening_braces.includes(char);
    }

    is_closing_brace(char) {
        const closing_braces = [')', ']', '}'];
        return closing_braces.includes(char);
    }

    is_not_a_match(opening_brace, closing_brace) {
        const pairs = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
        return pairs[opening_brace] !== closing_brace;
    }         
}

const newLinter = new linter;

newLinter.initialize
console.log(newLinter.lint("{ var x = { y: [1, 2, 3]})"))