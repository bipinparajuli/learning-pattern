const person = {
    name: "Bipin Parajuli",
    age: 23,
    nationality: "Nepali"
}

const personProxy = new Proxy(person,{
    get:(obj,prop) => {

        if (!obj[prop])
        {
            console.log('Hmm....this property does not seems to exists on target object ');
        }

        else{
        console.log(`The value of ${prop} is ${Reflect.get(obj,prop)}`);

        }

    },

    set:(obj,prop,value) => {

        if ( prop == "age" && typeof value != "number" )
        {
            console.log("You can only pass numeric value for age");
        }

        else if(prop == "name" && value.length < 2){
            console.log("You need to provide valid name");
        }
        else{
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
            Reflect.set(obj,prop,value);
        }
        

    }
})

// personProxy.something;
personProxy.name
personProxy.age = 24;