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

const { possiblePermutations, invented, largestCube } = rubiksCubeFacts
clog(`Rubiks was invented in ${invented} and until now the largest is ${largestCube}`);
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
**
*/
