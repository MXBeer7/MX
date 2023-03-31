@EndUserText.label: 'Projection View'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define root view entity ZMX_GTD_TASKS_P_12 as projection on ZMX_GTD_TASKS_12 {
    key Username,
    key Id,
    Title,
    ParentId,
    Actionable,
    SomedayMaybe,
    Details,
    DelegatedTo,
    WaitingFor,
    DeferredUntil,
    NextAction,
    Deleted,
    ForReference,
    ProjectId
}