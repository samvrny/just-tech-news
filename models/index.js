const User = require('./User');
const Post = require('./Post');

//create associations between the User and the Post classes/objects
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };