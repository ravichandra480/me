describe('profile home page', function () {
    it('should have page title', function () {
        browser.get('http://localhost:9000/profile/');
        expect(browser.getTitle()).toEqual('Ravi Chandra Ravulapati');
    });
    it('should have profile tags in home page', function () {
        expect(element.all(by.repeater('tag in tags')).count()).toBeGreaterThan(1);
    });
});
