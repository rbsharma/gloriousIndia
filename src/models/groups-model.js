export class GroupsModel {
    id: string;
    title: string;
    description: string;
    groups: [GroupModel];
}

export class GroupModel {
    id: string;
    title: string;
    description: string;
    entities: [EntityModel];
}

export class EntityModel {
    id: string = '';
    title: string = '';
    dob: string = '';
    dod: string = '';
    imageUrl: string = '';
    readMoreUrl: string = '';
    alias: string = '';
    organizations: [string] = [];
    movement: string = '';
    description: string = '';
    quotes: [string] = [];
}

export class StubGroupsData {
    getGroupsModel(): GroupsModel {
        //entities;
        let entityA: EntityModel = new EntityModel();
        entityA.id = '0';
        entityA.title = 'ENTITY ONE';

        let entityB: EntityModel = new EntityModel();
        entityB.id = '1';
        entityB.title = 'ENTITY TWO';

        let entityC: EntityModel = new EntityModel();
        entityC.id = '2';
        entityC.title = 'ENTITY THREE';


        //groups;
        let groupA: GroupModel = new GroupModel();
        groupA.id = '0';
        groupA.description = `THIS IS GROUP A DESCRIPTION. IT GENERALLY IS 2 TO 3 LINES LONG BUT
                              IT MAY EXCEED EVEN 10 LINES DEPENDING ON THE GROUP TYPE!!`;
        groupA.title = 'GROUP A';
        groupA.entities = new EntityModel()
        groupA.entities = [entityA, entityB, entityC];

        let groupB: GroupModel = new GroupModel();
        groupB.id = '1';
        groupB.description = `THIS IS GROUP B DESCRIPTION. IT GENERALLY IS 2 TO 3 LINES LONG BUT
                              IT MAY EXCEED EVEN 10 LINES DEPENDING ON THE GROUP TYPE!!`;
        groupB.title = 'GROUP B';
        //groupB.entities = new Array<EntityModel>()
        groupB.entities = [entityA, entityB, entityC];

        let groupC: GroupModel = new GroupModel();
        groupC.id = '2';
        groupC.description = `THIS IS GROUP C DESCRIPTION. IT GENERALLY IS 2 TO 3 LINES LONG BUT
                              IT MAY EXCEED EVEN 10 LINES DEPENDING ON THE GROUP TYPE!!`;
        groupC.title = 'GROUP C';
        //groupC.entities = new Array<EntityModel>()
        groupC.entities = [entityA, entityB, entityC];

        //groupsObject;
        let groupsModel: GroupsModel = new GroupsModel();
        groupsModel.id = '0';
        groupsModel.title = 'GROUPS MODEL';
        groupsModel.description = 'THIS IS GROUPS ACCUMULATED DESCRIPTION. IT GENERALLY IS 2 TO 3 LINES LONG BUT IT MAY EXCEED EVEN 10 LINES DEPENDING ON THE GROUP APP TYPE!!';
        groupsModel.groups = [groupA, groupB, groupC];

        return groupsModel;
    }
}