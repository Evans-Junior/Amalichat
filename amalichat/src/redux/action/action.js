export const addRemainder = text =>({
    type:"ADD_REMINDER",
    payload:text
});

export const delectReminder = reminder => ({
    type:"DELETE_REMINDER",
    payload:reminder
});