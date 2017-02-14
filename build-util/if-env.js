'use strict';

var name = process.argv[2],
	desired = process.argv[3],
	defaultValue = process.argv[4];

var value = process.env[name] !== undefined
	? process.env[name]
	: defaultValue;

if (value === desired) {
	require('child_process').execSync(process.argv[5]);
}
