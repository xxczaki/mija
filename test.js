import test from 'ava';
import execa from 'execa';

test('Test example.js output', async t => {
	const {stdout} = await execa('node', ['./example.js']);
	t.true(stdout.length > 0);
});
