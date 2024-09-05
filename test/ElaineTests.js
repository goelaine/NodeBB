
test('CategoryTools.init should call topicSelect.init with updateDropdownOptions', () => {
    const updateDropdownOptions = jest.fn();
    const initSpy = jest.spyOn(topicSelect, 'init');
    CategoryTools.init();
    expect(initSpy).toHaveBeenCalledWith(updateDropdownOptions);
});
