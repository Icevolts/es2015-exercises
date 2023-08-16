// returns a random item 
function choice(items){
    let rand = Math.floor(Math.random() * items.length);
    return items[rand];
}

// removes first matching item in items, otherwise returns undefined
function remove(item,items){
    for(let idx of items){
        if(idx === item){
            return [...items.slice(0,idx), ...items.slice(idx + 1)]
        }
    }
}

export {choice,remove}