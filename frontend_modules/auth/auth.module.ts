import { UserCredentials, User, AuthResponse } from './auth.types';

export class AuthModule {
  private currentUser: User | null = null;
  private token: string | null = null;

  /**
   * Authenticates a user with their credentials
   * @param credentials User login credentials
   * @throws AuthenticationError if login fails
   */
  async login(credentials: UserCredentials): Promise<void> {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const authResponse: AuthResponse = await response.json();
      this.token = authResponse.token;
      this.currentUser = authResponse.user;
      this.saveToLocalStorage();
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  /**
   * Logs out the current user
   */
  logout(): void {
    this.currentUser = null;
    this.token = null;
    this.clearLocalStorage();
  }

  /**
   * Returns the currently authenticated user
   * @returns Current user or null if not authenticated
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Checks if a user is currently authenticated
   * @returns true if authenticated, false otherwise
   */
  isAuthenticated(): boolean {
    return this.currentUser !== null && this.token !== null;
  }

  /**
   * Gets the authentication token
   * @returns Current token or null if not authenticated
   */
  getToken(): string | null {
    return this.token;
  }

  /**
   * Saves authentication state to local storage
   */
  private saveToLocalStorage(): void {
    if (this.currentUser && this.token) {
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      localStorage.setItem('token', this.token);
    }
  }

  /**
   * Clears authentication state from local storage
   */
  private clearLocalStorage(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
