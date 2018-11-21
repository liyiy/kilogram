json.extract! user, :id, :username, :posts
json.allFollowers user.userFollowers.ids
json.allFollowings user.userFollowings.ids
json.follows user.followings
json.numFollowers user.userFollowers.count
json.numFollowings user.userFollowings.count
