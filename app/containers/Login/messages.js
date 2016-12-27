/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.Login.title',
    defaultMessage: 'Login',
  },
  header: {
    id: 'app.containers.Login.header',
    defaultMessage: 'Login to your account',
  },
  submitButton: {
    id: 'app.containers.Login.submit.button',
    defaultMessage: 'Login',
  },
  emailPlaceholder: {
    id: 'app.containers.Login.email.placeholder',
    defaultMessage: 'E-Mail',
  },
  passwordPlaceholder: {
    id: 'app.containers.Login.password.placeholder',
    defaultMessage: 'Password',
  },
});
