module.exports = function(sequelize, DataTypes) {
  var DST = sequelize.define(
    "DST",
    {
      rank: DataTypes.INTEGER,
      // name: DataTypes.STRING,
      team: DataTypes.STRING,
      // position: DataTypes.STRING,
      tackles: DataTypes.INTEGER,
      sacks: DataTypes.INTEGER,
      interceptions: DataTypes.INTEGER,
      intTouchdowns: DataTypes.INTEGER,
      forcedFumbles: DataTypes.INTEGER,
      ffTouchdowns: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return DST;
};
