export const Errors = {
    PASSWORDS_MISSMATCH: {
        code: 1,
        message: "passwords do not match"
    },

    MISSING_DATA: {
        code: 2,
        message: "data is missing"
    },

    INVALID_EMAIL: {
        code: 3,
        message: "invalid email format"
    },

    EMAIL_EXISTS: {
        code: 4,
        message: "email allready used"
    },

    USERNAME_EXISTS: {
        code: 5,
        message: "username allready used"
    },

    SERVER_ERROR: {
        code: 6,
        message: "internal server error"
    },

    INVALID_LOGIN: {
        code: 7,
        message: "invalid login"
    },

    INVALID_USERNAME_OR_PASSWORD: {
        code: 8,
        message: "invalid username or password"
    },

    REGISTRATION_FAILED: {
        code: 8,
        message: "registration failed, try again later"
    },

    PERMISSION_DENIED: {
        code: 9,
        message: "permission denied"
    },

    INVALID_BIRTHDATE_FORMAT: {
        code: 10,
        message: "invalid birthdate format"
    },

    INVALID_PASSWORD_FORMAT: {
        code: 11,
        message: "invalid password format"
    },

    INVALID_USERNAME_FORMAT: {
        code: 12,
        message: "invalid username format"
    },

    USER_DOES_NOT_EXISTS: {
        code: 13,
        message: "user does not exist"
    },

    IVALID_PARAMS_COUNT: {
        code: 13,
        message: "invalid parametters count"
    },

    IVALID_JWT_TOKEN: {
        code: 14,
        message: "invalid jwt token"
    },

    MISSING_JWT_TOKEN: {
        code: 14,
        message: "missing jwt token"
    }
}