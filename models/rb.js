module.exports = function(sequelize, DataTypes) {
  var RB = sequelize.define("rb", {
    rank: DataTypes.INT,
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    rushingAttempts: DataTypes.INT,
    rushingYards: DataTypes.INT,
    rushingTouchdowns: DataTypes.INT,
    receptions: DataTypes.INT,
    receivingYards: DataTypes.INT,
    receivingTouchdowns: DataTypes.INT
  });
  return RB;
};
