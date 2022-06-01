export function filterMenu(data,role){
    return data.filter(item=>{
        return item.meta.role.indexOf(role)!=-1
    }).map(item=>{
        if(item.children){
            item.children=filterMenu(item.children,role)
        }
        return item
    })
}
