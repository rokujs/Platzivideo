import { setFavorite, loginRequest } from '../../actions/index';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
    test('should set favorite', () => {
        const payload = movieMock;
        const expectedAction = {
            type: 'SET_FAVORITE',
            payload,
        };
        expect(setFavorite(payload)).toEqual(expectedAction);
    });

    test('should Login', () => {
        const payload = {
            email: 'test@test.com',
            password: 'password',
        };
        const expectedAction = {
            type: 'LOGIN_REQUEST',
            payload,
        };
        expect(loginRequest(payload)).toEqual(expectedAction);
    });

});
