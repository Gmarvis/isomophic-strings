const isIsomophic = (s, t)=> {

    if (s.length !== t.length) 
    return "it is not isomophic"
    const map = {};
    for (let i=0; i<s.length ; i++){
        const firstLatterOfS = s[i];
        const firstLatterOft = t[i];
        if(map[firstLatterOfS]=== undefined){
            map[firstLatterOfS] = firstLatterOft

        } else if (map[firstLatterOfS] !== firstLatterOft) {return "it is not isomophic"}
    }
    return "yes they are isomophic"
    
}
console.log(isIsomophic ('egg', 'add'))