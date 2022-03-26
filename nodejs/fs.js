// fs module is used to read the files or stream data

import fs from 'fs';
import path from 'path';


// fs.readFile()

// JS -> 2 ways resolve the req -> sync and async

// sync -> this happens immediatly -> block your process util req completes
// async -> it will just returns you a placehoder and says will notify you once process is completed

// raise a event -> listen the event -> perform job



fs.readFile(path.resolve("tmp", "hello.txt"), (err, data) => {
    if (err)
        return err;

    console.log(data);
});

fs.readFileSync() // this one can be use for reading very small files like configs

// name, age , company
// arvind, 30, walmart
// anurag, 30, intellect

// readline -> it helps you read line by line -> buffer size will be very low
import readline from "readline";
const rl = readline.createInterface(path.resolve("tmp", "hello.txt"), process.stdout, false);

// when rl reads the data it raise the event -> rl.emit('line', currentLine);


let lineCount = 0;

rl.on('line', (line) => {
    lineCount++;
    //arvind, 30, walmart
    console.log(line);
});


// es6 way of hadling promises

const fsPromises = fs.promises;

const readHelloFile = async () => {
    try {
        let data = await fsPromises.readFile("/tmp/hello.txt", {});

    } catch (error) {
    }
}

//deno
import zlip from 'zlip';

fs.createReadStream()
    .pipe(zlip.createGzip())
    .pipe(fs.createWriteStream('destination.gzip'));



