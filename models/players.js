module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("players", {
    rank: DataTypes.INTEGER,
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    yards: DataTypes.INTEGER,
    touchdowns: DataTypes.INTEGER,
    interceptions: DataTypes.INTEGER,
    comp: DataTypes.DECIMAL
  });
  return Players;
};