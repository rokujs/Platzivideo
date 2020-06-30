import gravatar from '../../utils/gravatar';

test('should Gravatar function', () => {
    const email = 'jairito3851@gmail.com';
    const gravatarUrl = 'https://gravatar.com/avatar/40e207d1274d6564892142539849ca10';
    expect(gravatarUrl).toEqual(gravatar(email));

})
