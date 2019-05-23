const subject = require('./main');
describe('date not mocked', () => {
	it('', () => {
		const result = subject();
		expect(result).toNotEqual('fake date');
	});
});
