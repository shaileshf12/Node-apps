
const user = {
    name : "Abc",
    age : 25,
    gender : 'M',
    city : 'Mumbai'
}

// const {name:firstName, age, gender, city='Bangalore'} = user

// console.log(firstName, age, gender, city)

const display = ({name='user', age=28}={})=>{
    console.log(name, age)
}

display(user)