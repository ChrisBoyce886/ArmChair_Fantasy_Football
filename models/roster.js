module.exports = function(sequelize, DataTypes) {
  var Roster = sequelize.define(
    "Roster",
    {
      rank: DataTypes.INTEGER,
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Roster;
};