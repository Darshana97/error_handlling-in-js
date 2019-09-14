const user = {email: 'jdoe@gmail.com'};

try {
    //produce a reference error
    // myfunction();

    //produce a type error
    // null.myfunction(); 

    //will produce syntax error
    //eval('hello world');

    //will produce a URI error
    //decodeURIComponent('%');

    if(!user.name){
        // throw 'user has no name';
        throw new SyntaxError('user has no name');
    }

    
} catch (e) {
    console.log(`user error: ${e.message}`);
    //console.log(e);
    //console.log(`${e.name}: ITS NULL STUPID!!! `);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
    
} finally{
    console.log('finally runs regardless of result');
}

console.log('programme continus');