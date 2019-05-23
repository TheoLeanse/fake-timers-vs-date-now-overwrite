const subject = require('./main');
Date.now = () => 'fake date';
describe('date mocked', () => {
	it('', () => {
		const result = subject();
		expect(result).toEqual('fake date');
	});
});
