const { sum } = require('../helpers')

escribe('Helpers', () => {
    it('should', () => {
        const result = sum(2, 2);
        expect(result).toBe(4);
    })
})