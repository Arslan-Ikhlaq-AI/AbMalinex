import Marketing from './Marketing'
import DashboardController from './DashboardController'
import Teams from './Teams'
import Settings from './Settings'

const Controllers = {
    Marketing: Object.assign(Marketing, Marketing),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Teams: Object.assign(Teams, Teams),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers