/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - Database Data Types utilities class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const { toLocaleLowerCaseTrim } = require(`./../../common/functions`);
const TYPES = require(`tedious`).TYPES;

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const DataTypes = () => {
    /*
    |--------------------------------------------------------------------------------------------------------------------------------------------
    | Functions
    |--------------------------------------------------------------------------------------------------------------------------------------------
     */
    const getMsSqlDataType = (typeName) => {
        switch(toLocaleLowerCaseTrim(typeName || '')){
            case 'boolean': return TYPES.Bit;
            case 'date': return TYPES.DateTime;
            case 'number': return TYPES.BigInt;
            default: return TYPES.NVarChar;
        }
    }
    
    /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
    return {
        getMsSqlDataType: getMsSqlDataType
    };

}

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = DataTypes;