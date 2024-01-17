export const configs = () => ({
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  },
  redisConfig: {
    socket: {
      tls: ['production', 'stage'].includes(
        process.env.NODE_ENV.toLowerCase().trim(),
      ),
      rejectUnauthorized: false,
      connectTimeout: 300_000,
    },
    url: process.env.REDIS_URL,
  },
  mailgun: {
    apiKey: process.env.MAIL_GUN_API_KEY,
    domain: process.env.MAIL_GUN_DOMAIN,
    defaultEmailReceiver: 'dev@routewatche.com',
    defaultEmailTo: {
      support: 'support@routewatche.com',
      engineering: 'engineering@routewatche.com',
      marketing: 'marketing@routewatche.com',
    },
    defaultEmailFrom: {
      hello: 'Sarah from Routewatche <hello@routewatche.com>',
      support: 'Sarah from Routewatche <support@routewatche.com>',
      engineering: 'Sarah from Routewatche <engineering@routewatche.com>',
      marketing: 'Sarah from Routewatche <marketing@routewatche.com>',
      finance: 'Sarah from Routewatche <finance@routewatche.com>',
    },
    templates: {
      generalSignUp: 'routewatche-welcome',
      generalAccountDeletion: 'account-deletion', //not implemented
      generalPasswordChange: 'password-change',
      generalLogin: 'signin-notification', //not implemented
      generalEmailVerification: 'email-verification',
      emergencyContactAlert: 'emergency-alert',
      emergencyContactNotification: 'emergency-contact-notification',
    },
  },
});
