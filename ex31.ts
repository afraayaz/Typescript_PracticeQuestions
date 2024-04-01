let username : string[]=["hira","afra","admin","sara"]
if(username.length===0)
{
    console.log("User list is empty so we need to find some users.")
}
else{
    console.log("list is not empty")
}
while(username.length > 0)
{
    username.pop()
}
if(username.length===0)
{
    console.log("User list is empty so we need to find some users.")
}
else{
    console.log("list is not empty")
}