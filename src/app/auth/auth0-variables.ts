interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'XCKKQXUdSTtnema_SPqyiQr9irAHpJy-',
  domain: 'qwertykey.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
