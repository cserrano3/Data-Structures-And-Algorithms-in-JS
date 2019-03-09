const readline = require('readline');
const Stack = require('./Stack.js');
const items = require('./MOCK_DATA.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stackMap = new Stack();

let stack = stackMap.set_Items(items);

const QUESTIONS = [
    'Type the name: ',
    'Type the last name: ',
    'Type the email: ',
    'Tell me the gender: ',
    'Tell me the IP Address: '
]

const answers = [];

function _parseAnswers(answers, id) {
    return {
        id: id,
        first_name: answers[0],
        last_name: answers[1],
        email: answers[2],
        gender: answers[3],
        ip_address: answers[4]
    };
}

function addItems(QUESTIONS) {
    if(!QUESTIONS.length) {
        rl.close();
        let id = stackMap.size(stack) + 1;
        const stackItem = _parseAnswers(answers, id);
        stack.push(stackItem);
        const lastItem = stackMap.peek(stack);
        console.log('Last item added: ', lastItem);
    } else {
        QUESTIONS.forEach(question => {
            rl.question(question, answer => {
                answers.push(answer);
                QUESTIONS.shift();
                addItems(QUESTIONS);
            });
        });
    }
}

function menu() {
    const query = 'Enter the corresponding number for one of the options above: ';
    console.log('1) Add Item \n2) Remove Item \n3) Check last included item \n4) Amount of items \n5) Remove all items \n6) List all items');

    rl.question(query, answer => {
        if(answer === '1'){
            addItems(QUESTIONS);
        } else if(answer === '2'){
            const removedItem = stackMap.pop(stack);
            console.log('Removed item: \n' + JSON.stringify(removedItem));
        } else if(answer === '3'){
            const lastItem = stackMap.peek(stack);
            console.log(lastItem);
        } else if(answer === '4'){
            const size = stackMap.size(stack);
            console.log(size);
        } else if(answer === '5'){
            stackMap.clear();
            console.log('Current stack: ', stackMap.get_Items());
        } else if(answer === '6'){
            let items = stackMap.get_Items();
            console.log(items);
        } else {
            console.log('Not a default answer');
        }
    });
}

menu();
