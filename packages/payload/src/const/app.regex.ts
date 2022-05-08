export const REMOVE_SPACE: RegExp = new RegExp("[ ]+", "g");

export const REMOVE_SPECIAL_CHARACTERS: RegExp = new RegExp(/[^A-Z0-9]/ig);

export const REMOVE_CURLY_BRACKETS:RegExp = new RegExp(/\{{|}}/g);

export const EXTRACT_CURLY_BRACKETS_STRING:RegExp =  new RegExp(/\{{[^)]*\}}/g);

