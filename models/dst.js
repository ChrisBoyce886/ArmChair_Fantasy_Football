module.exports = function(sequelize, DataTypes) {
  var DST = sequelize.define("dst", {
    rank: DataTypes.INT,
    team: DataTypes.STRING,
    tackles: DataTypes.INT,
    sacks: DataTypes.INT,
    interceptions: DataTypes.INT,
    intTouchdowns: DataTypes.INT,
    forcedFumbles: DataTypes.INT,
    ffTouchdowns: DataTypes.INT
  });
  return DST;
};
