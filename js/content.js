export const testText = `0:07
hey what's going on guys in this video we're going to add authentication to a rest api
0:13
using json web tokens now this is actually part two of a mirnstack series
0:20
but i do just want to quickly explain the the current code that we have just in case you didn't watch the first video
0:27
where we created the rest api so basically we have a crud api we can
0:32
create read update and delete goals so we can make a get request to our you
0:37
know api slash goals and we can fetch them right now i don't have any i actually deleted all them but we can
0:43
also make a post request to add a goal we can make a put request to update and we can make a delete request to delete a
0:50
goal so that's the extent of the functionality and then this is the folder structure here so in the backend
0:56
folder we have our server.js we have api goals going to our goal routes which is
1:03
this folder here or this file here and then we have some functions from the controller that we're bringing in and
1:09
setting to certain endpoints so slash and then slash id and we have our functions in our
1:15
controller so here you can see we have get goals which just fetches them from
1:20
mongodb using mongoose set goal we have update goal and we have delete
1:27
goal and then we just created a custom error handler as well so that's pretty
1:32
much what we did in the first video so now like i said i want to add authentication so that not
1:38
just anybody can come to these endpoints and get get and set and
1:43
update and delete goals all right now just to talk a little bit about
1:48
json web tokens and and what they are this this is jwt dot io this is the
1:54
official site for jason webb tokens and if we scroll down to us this is what
2:00
the token actually looks like which kind of just looks like a mess but that's because it's encoded but there's
2:06
actually three different parts and you can see they've color coded them and the first part is the header which includes
2:12
the algorithm and the token type which is jsonwebtoken is the type and then it
2:18
includes some data in json in the json format and you can have whatever you
2:23
want in your in your token in our case we're going to have the user id so it also has an issued at which is the
2:31
timestamp that the the token was issued at and then it also has a signature which will ensure that the jwt hasn't
2:38
been altered with or tampered with in any way and the party that creates the token
2:44
signs the header and payload with a secret that's known to the issuer and the receiver or private key that's known
2:51
only to the issuer so basically when we have a route we want to be able to protect it and we'll have to log in get
2:58
the token and send the token and the headers to access that protected route okay so that's what we're going to do in
3:05
this particular video and then in the next video we should be able to start on the front end
3:10
so let's first let's first create in models here since users
3:16
is going to be a new resource we're going to create a new file in models called user
3:21
model.js and if you watch the first video you
3:27
 `;
