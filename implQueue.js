const readline = require('readline');
const Queue = require('./Queue.js');
const items = require('./SMALL_MOCK_DATA.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let queueMap = new Queue();

let queue = queueMap.set_Items(items);

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
        let id = queueMap.size(queue) + 1;
        const queueItem = _parseAnswers(answers, id);
        queue.push(queueItem);
        console.log('Last item added: ', queueItem);
        menu();
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
    console.log('1) Add Item \n2) Remove Item \n3) Check next item in the queue \n4) Number of  items in the queue\n5) Remove all items \n6) List all items');

    rl.question(query, answer => {
        if(answer === '1'){
            addItems(QUESTIONS);
        } else if(answer === '2') {
            console.log('Removed Item from que Queue ------- ', queueMap.dequeue(queue));
            menu();
        } else if(answer === '3') {
            console.log('Next item in the queue ------- ', queueMap.front(queue));
            menu();
        } else if(answer === '4') {
            console.log('Number of items: ', queueMap.size(queue));
            menu();
        } else if(answer === '5') {
            queueMap.dequeue_complete();
            menu();
        } else if(answer === '6'){
            console.log('Items: ', queue);
            menu();
        }
    });
}

menu();
