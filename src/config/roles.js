const roles = ['user', 'admin', 'employee'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[1], ['getUsers', 'manageUsers']);
roleRights.set(roles[2], ['managePets'])

module.exports = {
    roles,
    roleRights,
};
