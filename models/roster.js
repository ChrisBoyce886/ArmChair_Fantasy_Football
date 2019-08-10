module.exports = function(sequelize, DataTypes) {
  var ROSTER = sequelize.define(
    "ROSTER",
    {
      rank: DataTypes.INTEGER,
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING,
      yards: DataTypes.INTEGER,
      touchdowns: DataTypes.INTEGER,
      interceptions: DataTypes.INTEGER,
      comp: DataTypes.DECIMAL,
      rushingYards: DataTypes.INTEGER,
      rushingTouchdowns: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return ROSTER;
};