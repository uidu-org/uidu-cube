cube(`Accounts`, {
  sql: `SELECT * FROM accounts`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        firstName,
        id,
        lastName,
        provider,
        stripeId,
        uid,
        createdAt,
        invitationCreatedAt,
        rememberCreatedAt,
        updatedAt,
        birthdate,
      ],
    },

    signInCount: {
      sql: `sign_in_count`,
      type: `sum`,
    },
  },

  dimensions: {
    avatarData: {
      sql: `avatar_data`,
      type: `string`,
    },

    bio: {
      sql: `bio`,
      type: `string`,
    },

    confirmationToken: {
      sql: `confirmation_token`,
      type: `string`,
    },

    coverData: {
      sql: `cover_data`,
      type: `string`,
    },

    currentSignInIp: {
      sql: `current_sign_in_ip`,
      type: `string`,
    },

    email: {
      sql: `email`,
      type: `string`,
    },

    encryptedPassword: {
      sql: `encrypted_password`,
      type: `string`,
    },

    firstName: {
      sql: `first_name`,
      type: `string`,
    },

    fiscalCode: {
      sql: `fiscal_code`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    invitationToken: {
      sql: `invitation_token`,
      type: `string`,
    },

    invitedByType: {
      sql: `invited_by_type`,
      type: `string`,
    },

    lastName: {
      sql: `last_name`,
      type: `string`,
    },

    lastSignInIp: {
      sql: `last_sign_in_ip`,
      type: `string`,
    },

    phone: {
      sql: `phone`,
      type: `string`,
    },

    preferences: {
      sql: `preferences`,
      type: `string`,
    },

    provider: {
      sql: `provider`,
      type: `string`,
    },

    resetPasswordToken: {
      sql: `reset_password_token`,
      type: `string`,
    },

    stripeBillingDetails: {
      sql: `stripe_billing_details`,
      type: `string`,
    },

    stripeId: {
      sql: `stripe_id`,
      type: `string`,
    },

    tokens: {
      sql: `tokens`,
      type: `string`,
    },

    uid: {
      sql: `uid`,
      type: `string`,
    },

    unconfirmedEmail: {
      sql: `unconfirmed_email`,
      type: `string`,
    },

    website: {
      sql: `website`,
      type: `string`,
    },

    createdAt: {
      sql: `created_at`,
      type: `time`,
    },

    invitationCreatedAt: {
      sql: `invitation_created_at`,
      type: `time`,
    },

    rememberCreatedAt: {
      sql: `remember_created_at`,
      type: `time`,
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`,
    },

    anonymizedAt: {
      sql: `anonymized_at`,
      type: `time`,
    },

    birthdate: {
      sql: `birthdate`,
      type: `time`,
    },

    confirmationSentAt: {
      sql: `confirmation_sent_at`,
      type: `time`,
    },

    confirmedAt: {
      sql: `confirmed_at`,
      type: `time`,
    },

    currentSignInAt: {
      sql: `current_sign_in_at`,
      type: `time`,
    },

    invitationAcceptedAt: {
      sql: `invitation_accepted_at`,
      type: `time`,
    },

    invitationSentAt: {
      sql: `invitation_sent_at`,
      type: `time`,
    },

    lastRequestAt: {
      sql: `last_request_at`,
      type: `time`,
    },

    lastSignInAt: {
      sql: `last_sign_in_at`,
      type: `time`,
    },

    resetPasswordSentAt: {
      sql: `reset_password_sent_at`,
      type: `time`,
    },

    unsubscribedAt: {
      sql: `unsubscribed_at`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
