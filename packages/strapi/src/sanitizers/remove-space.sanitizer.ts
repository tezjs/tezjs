import { REMOVE_SPACE } from "../const/app.regex";

export default function removeSpace(value: string) {
    return value ? value.replace(REMOVE_SPACE, '') : '';
}