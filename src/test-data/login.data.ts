export const LOGIN_DATA = {
    valid: {
      username: 'practice',
      password: 'SuperSecretPassword!'
    },
    invalid: {
      username: 'invalid',
      password: 'notapassword'
    },
    empty: {
      username: '',
      password: ''
    }
  } as const;