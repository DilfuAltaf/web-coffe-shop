import './assets/main.css'

import { createApp } from 'vue'
import RegisterKomponen from './components/register/RegisterKomponen.vue'

const loginWith = (provider) => {
  let url = ''

  switch (provider) {
    case 'Google':
      url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email%20profile'
      break
    case 'Apple':
      url = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=name%20email'
      break
    case 'Facebook':
      url = 'https://www.facebook.com/v13.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token'
      break
    case 'X':
      url = 'https://api.twitter.com/oauth/authenticate?oauth_token=YOUR_OAUTH_TOKEN'
      break
  }

  if (url) {
    window.location.href = url
  } else {
    console.error('Unsupported provider')
  }
}


createApp(RegisterKomponen).mount('#app')
