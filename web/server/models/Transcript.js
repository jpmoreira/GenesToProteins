'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Transcript', {
        transcriptId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING
        }
    });
};
