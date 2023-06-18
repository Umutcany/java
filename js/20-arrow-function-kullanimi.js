// Arrow function kullanimi




function hello(firstName) {

    console.log(`Merhaba ${firstName}`)


}

hello("JavaScript")


const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)
}

helloFuncV1("Osman Abi")

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`) //Bir parametre ve bir dönüş işlemi varsa süslü parantez ve paranteze ihtiyacım yok.

helloFuncV2("Mahmut Abi")


const helloFuncV3 = (firstName, lastName) =>

console.log(`Merhaba ${firstName} ${lastName}`)

helloFuncV3("Mahmut Abi", "Last Name İnfo")


const helloFuncV4 = (firstName, lastName) => {

    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("HellofuncV4", "Other info")

// => fat arrow diyoruz buna