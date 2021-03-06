/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-21
| Description:	IDAS - Genio - API - Entity (Model) for the UserProfile
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const UserProfile = () => {
    const fromComponents = (user = {}, employee = {}, client = {}, supplier = {}, contactDetail = {}) => {
        user.EmployeeId = employee._id;
        user.ClientId = client._id;
        user.SupplierId = supplier._id;
        return {
            User : user,
            Employee : employee,
            Client : client,
            Supplier : supplier,
            ContactDetail : contactDetail,
        }
    }
    return {
        fromComponents: fromComponents
    }
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = UserProfile;
