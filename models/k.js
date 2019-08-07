module.exports = function(sequelize, DataTypes) {
  var K = sequelize.define("k", {
    rank: DataTypes.INT,
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    fga: DataTypes.INT,
    fgm: DataTypes.INT,
    fgp: DataTypes.DECIMAL,
    epa: DataTypes.INT,
    epm: DataTypes.INT,
    epp: DataTypes.DECIMAL
  });
  return K;
};
