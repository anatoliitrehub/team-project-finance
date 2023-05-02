export const getAuthStatus = state => Boolean(state.auth.token);

export const getErrorStatus = state => Boolean(state.auth.error);

export const getName = state => state.auth.user.name;

export const getCurrentBalance = state => state.auth.user.balance;

export const getBalanceStatus = state => Boolean(state.auth.user.balance);

