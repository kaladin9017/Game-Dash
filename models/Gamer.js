'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  const Gamer = sequelize.define('Gamer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },{
    hooks: {
      beforeCreate: function(gamer, options, next) {
        bcrypt.genSalt(8, function(err, salt){
          if(err){
            throw err;
          }
          bcrypt.hash(gamer.password, salt, null, function(ele, hash){
            if(err){
              throw err;
            }
            gamer.password=hash;
            next();
          });
        });
      }
    },
    classMethods: {
      associate: function(models) {

        // associations can be defined here
      },
      comparePassword : function(candidatePassword, callback) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
          if(err) {return callback(err);}

          callback(null, isMatch);

        });
      }
    },
    instanceMethods : {
      comparePassword : function(candidatePassword, callback) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
          if(err) {return callback(err);}
          callback(null, isMatch);

        });
      }
    }
  });
  return Gamer;
};
