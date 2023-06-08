import { JwtModuleOptions } from '@auth0/angular-jwt';

export const jwtConfig: JwtModuleOptions = {
  config: {
    tokenGetter: () => {
      // Implement logic to retrieve the JWT token from storage
      return localStorage.getItem('access_token');
    },
    allowedDomains: ["http://localhost:8080/api/profile", "http://localhost:8080/api/profile/favorites"],
    disallowedRoutes: ["http://localhost:8080/auth/users/login", "http://localhost:8080/auth/users/register", "http://localhost:8080/api/resources","http://localhost:8080/api/specialists", "http://localhost:8080/api/resources/all"],
  },
};
