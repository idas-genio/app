/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio API - MS SQL [dbo].[EntityRelationship] database repository model class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */


/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const Repository = (config = getDefaultConfig()) => {
    const getAll = (request, response, next) => {

    }
    const getBy = (request, response, next) => {

    }

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
    return {
        getAll: getAll,
        getBy: getBy
    };

}
const getDefaultConfig = () => { return require(`./../../../../config/config`); }

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Repository;
