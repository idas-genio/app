/*
|------------------------------------------------------------------------------------------------------------------
| Author:	   TS MOGANO
| Create date:  2022-02-21
| Description:  IDAS - Genio - API - Routes utility class for the [dbo].[LookupValue] table
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|------------------------------------------------------------------------------------------------------------------
 */
const _hearbeat = require(`./../heartbeat`);
const _repository = require(`./../../database/repository/mssql/LookupValueRepository`);

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = function(router, config) {
  const apiAnchorName = `lookup-value`;
  const heartbeat = _hearbeat(config);
  const repository = _repository();

    // ping
    router.route(`/${apiAnchorName}/ping`)
      .get(heartbeat.ping);

    // create
    router.route(`/${apiAnchorName}/create`)
      .put(repository.create);

    // getAll
    router.route(`/${apiAnchorName}/getAll`)
      .get(repository.getAll);

    // getById
    router.route(`/${apiAnchorName}/getById`)
      .get(repository.getById);

    // getBy
    router.route(`/${apiAnchorName}/getBy`)
      .get(repository.getBy);

    // update
    router.route(`/${apiAnchorName}/update`)
      .put(repository.update);

    // delete
    router.route(`/${apiAnchorName}/delete`)
      .put(repository.delete);

}
