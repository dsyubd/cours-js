let names =[]
names.push("Vincent","Paul","Arthur")

for (let i = 0 ; i < names.length ; i++) {
    names[i] = names[i] + "va à la peche"

console.log(names[i])
}
names.forEach(name => {
    name += " et au tennis"
    console.log(name)

    
});