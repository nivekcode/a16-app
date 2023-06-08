import {GhUsersService} from "./gh-users.service";

describe('GhUsersService', function () {
  let sut: GhUsersService;

  const httpMock = {
    get: jest.fn()
  } as any;

  beforeEach(() => {
    sut = new GhUsersService(httpMock);
  });

  it('should return a user', function () {
    const expectedUser = 'el user' as any;
    httpMock.get.mockReturnValue(expectedUser);
    const actualUser = sut.searchUser('test');
    expect(actualUser).toBe(expectedUser);
  });

});
