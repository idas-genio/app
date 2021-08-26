/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-26
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[User] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const User = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.EmployeeId, entity.ClientId, entity.SupplierId, entity.EmailAddress, entity.PasswordHash, entity.UserTypeId, entity.IsAdmin, entity.IsLocked, entity.Avatar, entity.DateLastLoggedIn, entity.SessionToken, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, EmployeeId, ClientId, SupplierId, EmailAddress, PasswordHash, UserTypeId, IsAdmin, IsLocked, Avatar, DateLastLoggedIn, SessionToken, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			EmployeeId: EmployeeId,
			ClientId: ClientId,
			SupplierId: SupplierId,
			EmailAddress: EmailAddress,
			PasswordHash: PasswordHash,
			UserTypeId: UserTypeId,
			IsAdmin: IsAdmin,
			IsLocked: IsLocked,
			Avatar: Avatar,
			DateLastLoggedIn: DateLastLoggedIn,
			SessionToken: SessionToken,
			IsActive: IsActive,
			CreatedBy: CreatedBy,
			DateCreated: DateCreated,
			ModifiedBy: ModifiedBy,
			DateModified: DateModified,
		}
	}
	return {
		fromEntity: fromEntity,
		fromComponents: fromComponents
	}
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = User;
