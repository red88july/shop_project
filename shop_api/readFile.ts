import {promises as fs} from 'fs';

const fileName = './test.json';

interface fileContents {
    author: string,
    message: string,
}

const run = async () => {
    try {
        const fileContents = await fs.readFile(fileName);
        const result = JSON.parse(fileContents.toString()) as fileContents;
        console.log('Result:', result.message);
    } catch (err) {
        console.error(err);
    }
};

void run();