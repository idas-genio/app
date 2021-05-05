/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio API common Functions utilities class 
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const appendLeadingZero = (number) => {
    return (number <= 9) ? `0` + number : number;
}
const padLeft = (value, padding) => {
  return (value && padding) ? value.toString().padEnd(padding.length, padding) : value;
}
const padRight = (value, padding) => {
  return (value && padding) ? value.toString().padStart(padding.length, padding) : value;
}
const isObjectSet = (value) => {
    return !(value === null) || !(value === undefined) || !(value === NaN);
}
const isEmptyObject = (value) => { return Object.keys(value).length === 0 && value.constructor === Object; }
const isStringSet = (value) => {
    return isObjectSet(value) && value.trim().length != 0;
}
const IsSetReturn = (value, defaultValue = null) => {
    return isStringSet(value) ? value : defaultValue;
}
const ifNullReturn = (value) => {
    return (value) ? value.trim() : null;
}
const hasValues = (values) => {
    return values && Array.isArray(values) && values.length != 0;
}
const isValidEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const getBytes = (stringValue) => {
    var bytes = [];
    for (var i = 0; i < stringValue.length; ++i)
    {
        bytes.push(stringValue.charCodeAt(i));
    }
    return bytes;
}
const bytesToString = (byteArray) => {
    return String.fromCharCode.apply(String, byteArray);
}
const toBase64 = (valueToEncode) => {
    return Buffer.from(valueToEncode).toString(`base64`);
}
const getBaseUrl = (protocol, hostIpName, portNumber = null) => {
    if(protocol && hostIpName && portNumber) return `${protocol}://${hostIpName}:${portNumber}`;
    if(protocol && hostIpName) return `${protocol}://${hostIpName}`;
    return null;
}
const useContentType = (type) => {
    return `application/${type}`.toLocaleLowerCase();
}
const formattedAction = (action) => {
    switch (action.toLocaleLowerCase()) {
        case `create`: return `created`;
        case `add`: return `added`;
        case `edit`: return `edited`;
        case `delete`: return `deleted`;
        case `update`: return `updated`;
        case `change`: return `changed`;
        case `find`: return `finds`;
        case `fetch`: return `fetched`;
        case `login`: return `logged in`;
        case `logout`: return `logged out`;
        case `validate`: return `validated`;
        case `authenticate`: return `authenticated`;
        default: return action;
    }
}
const isBetween = (value, start = 0, bound = 0) => {
    return (value && (value >= start) && (value <= bound));
}
const toNumber = (value) => {
    return Number.parseFloat(value);
}
const ifHasData = (array = []) => {
    return array && array.length != 0;
}
const flattenArray = (array = []) => {
    return [].concat.apply([], array);
}
const getFirst = (valueToSplit, delimiter) => {
    return getElementAt(valueToSplit, delimiter, 0);
}
const getElementAt = (valueToSplit, delimiter, index = 0) => {
  var items = (valueToSplit && delimiter) ? valueToSplit.split(delimiter) : [];
  return items[index];
}
const getLast = (valueToSplit, delimiter) => {
  var items = (valueToSplit && delimiter) ? valueToSplit.split(delimiter) : [];
  return items[items.length - 1];
}
const toLocaleLowerCase = (value) => {
    return (value || ``).toLocaleLowerCase();
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
    appendLeadingZero: appendLeadingZero,
    padLeft: padLeft,
    padRight: padRight,
    isObjectSet: isObjectSet,
    isEmptyObject: isEmptyObject,
    isStringSet: isStringSet,
    IsSetReturn, IsSetReturn,
    ifNullReturn: ifNullReturn,
    hasValues: hasValues,
    isValidEmail: isValidEmail,
    getBytes: getBytes,
    bytesToString: bytesToString,
    toBase64: toBase64,
    getBaseUrl: getBaseUrl,
    useContentType: useContentType,
    formattedAction: formattedAction,
    isBetween: isBetween,
    toNumber: toNumber,
    ifHasData:ifHasData,
    flattenArray: flattenArray,
    getFirst: getFirst,
    getElementAt:getElementAt,
    getLast, getLast,
    toLocaleLowerCase: toLocaleLowerCase
}
