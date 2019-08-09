module.exports = function(sequelize, DataTypes) {
  var K = sequelize.define(
    "K",
    {
      rank: DataTypes.INTEGER,
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING,
      fga: DataTypes.INTEGER,
      fgm: DataTypes.INTEGER,
      fgp: DataTypes.DECIMAL,
      epa: DataTypes.INTEGER,
      epm: DataTypes.INTEGER,
      epp: DataTypes.DECIMAL
    },
    {
      timestamps: false
    }
  );
  return K;
};
