@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'GTD Tasks'
@Metadata.allowExtensions: true
define root view entity ZMX_GTD_TASKS_12
  as select from zgtd_tasks
{
  key username       as Username,
  key id             as Id,
      title          as Title,
      parent_id      as ParentId,
      actionable     as Actionable,
      someday_maybe  as SomedayMaybe,
      details        as Details,
      delegated_to   as DelegatedTo,
      waiting_for    as WaitingFor,
      deferred_until as DeferredUntil,
      next_action    as NextAction,
      deleted        as Deleted, 
      for_reference  as ForReference,
      project_id     as ProjectId
}
