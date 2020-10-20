#!/usr/bin/env node

'use strict'

const clog = console.log;

const classElection = {
	date: 'january 12'
};

const student = {
	name: 'Slow Bob',
	score: 100,
	grade: 'F'
};

const engine = {
	type: 'Diesel',
	start(adverb) {
		clog(`The engine starts up ${adverb}`);
	},
	sputter: () => {
		clog('The engine sputters..');
	}
};


const rubiksCubeFacts = {
	possiblePermutations: '200,43,587,5888',
	invented: 1974,
	largestCube: '17x17x17'
}

const myObj = {
	data: 'abc',
	loggerA: () => { clog(this.data); },
	loggerB() { clog(this.data) }
};

const circular = {
	_circular: circular,
	get circular() {
		return this;
	}
}

clog(circular.circular)
/*
**	console.log(classElection.month)
**	delete student.name
**	student.grade = 'A'
**	clog(student)
**
**	for (let key in student) {
**		clog(student[key])
**	engine.start('Noisy');
**	engine.sputter();
**	const { possiblePermutations, invented, largestCube } = rubiksCubeFacts
**	clog(`Rubiks was invented in ${invented} and until now the largest is ${largestCube}`);
**	myObj.loggerA();
**	myObj.loggerB();
**
*/
