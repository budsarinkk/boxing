import React, { useState } from 'react';
import LoginForm from './auth/LoginForm';
import Dashboard from './dashboard/Dashboard';
import { AuthModule } from './auth/auth.module';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authModule = new AuthModule();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    authModule.logout();
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
