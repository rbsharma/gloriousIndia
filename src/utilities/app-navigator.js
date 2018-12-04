import { StackNavigator } from 'react-navigation';

import GroupsComponent from "../modules/groups/groups";
import GroupComponent from '../modules/group/group';
import EntityComponent from '../modules/entity/entity';

//TODO : DEPRECATE ONE BY ONE
import HomeScreen from '../components/home';
import ListScreen from '../components/list';
import ListItemDetailScreen from '../components/list-item-detail';
import TempScreen from '../components/temp';

const AppNavigator = StackNavigator({
    groups: { screen: GroupsComponent },
    group: { screen: GroupComponent },
    entity: { screen: EntityComponent },
    // Home: { screen: HomeScreen },
    // List: { screen: ListScreen },
    // ListDetails: { screen: ListItemDetailScreen },
    // Temp: { screen: TempScreen },

    //Home: HomeScreen, List: ListScreen, Temp: TempScreen
},
    {
        initialRouteName: 'groups'
    }
)

export default AppNavigator;