var path = require("path");
var friendsMod = require("../data/friends.js");
var friends = friendsMod.friends;

module.exports = function(app) {
// Display all friends
// Displays all characters
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var bestFriend = compareFriend(newFriend)
    friends.push(newFriend);
    res.json(bestFriend);
});
} 


function compareFriend(newFriend)
{
    var bestMatchID = 0;
    var bestMatchScore = 0;
    for(var i=0;i<friends.length;i++)
    {

        matchScore = 
        Math.abs(newFriend.scores[0]-friends[i].scores[0])+
        Math.abs(newFriend.scores[1]-friends[i].scores[1])+
        Math.abs(newFriend.scores[2]-friends[i].scores[2])+
        Math.abs(newFriend.scores[3]-friends[i].scores[3])+
        Math.abs(newFriend.scores[4]-friends[i].scores[4])+
        Math.abs(newFriend.scores[5]-friends[i].scores[5])+
        Math.abs(newFriend.scores[6]-friends[i].scores[6])+
        Math.abs(newFriend.scores[7]-friends[i].scores[7])+
        Math.abs(newFriend.scores[8]-friends[i].scores[8])+
        Math.abs(newFriend.scores[9]-friends[i].scores[9])
        if(matchScore<=bestMatchScore)
        {
            bestMatchID = i;
        }
    }
    return {"name": friends[bestMatchID].name, "photoUrl": friends[bestMatchID].photo};
}