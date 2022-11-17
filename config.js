module.exports = {
 dirBase : './database/base_1.db',
 superusers: [], //Puedes añadir ID
 token: 'Discord Bot Token',
 ytKey: 'Youtube Token',
 prefix: '-',
 statusBOT: 'Estoy listo!',
 categories: [
  {name: "general", priority: 5},
  {name: "admin", priority: 8},
  {name: "music", priority: 7}
 ],
 groups: [
  {name: "User", permlvl: 0},
  {name: "Member", permlvl: 1},
  {name: "Mod", permlvl: 2},
  {name: "Admin", permlvl: 3}
 ]
 
}
