function make_shirt(size:string,message:string): void{
    let sizetolower=size.toLowerCase()
    if(sizetolower=="large"||sizetolower=="medium")
    {
        message="I love typescript."
        console.log("You ordered a "+size+" t-shirt that contains this message: "+message)
    }
    else
    {
        console.log("You ordered a "+size+" t-shirt with the message: "+message)

    }
}

make_shirt("medium","i love pakistan")
make_shirt("small","i love pakistan")
make_shirt("large","i love pakistan")
