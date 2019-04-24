import test from 'ava';
import execa from 'execa';

test('Test example.js output', async t => {
	const {stdout} = await execa('node', ['test/fixture.js']);
	t.true(stdout.length > 0);
});
