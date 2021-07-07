const hash = {
    data_tree() {
        var temp = localStorage.getItem("data_tree") ? localStorage.getItem("data_tree") : "[]"
        return JSON.parse(temp)
    },
    find_node(root,name)
    {
        for(var i in root)
        {
            if(root[i] instanceof Array && root[i][0]==name)
                return root[i]
        }
        return false
    },
    identify(hash_v = location.hash) {
        var arr=this.arr(hash_v)
        var root=this.data_tree()
        for(var i=0;i<arr.length;i++)
        {
            root=this.find_node(root,arr[i])
            if(root === false)
                return false
        }
        console.log("HASH正确，",root)
        return root
    },
    arr(hash_v = location.hash) {
        hash_v=this.hash(hash_v)
        var res = hash_v ? hash_v.split("/") : []
        for(var i=0;i<res.length;i++)
            if(res[i]=='')
                res.splice(i--,1)
            else if(res[i]=="..")
            {
                res.splice(i--,1)
                if(i>=0)
                    res.splice(i--,1)
            }
        return res
    },
    item_list(hash_v = location.hash) {
        var li = this.identify(hash_v)
        var res=[]
        if(this.hash(hash_v))
            res.push({
                type:"backward",
                details:{name:".."}
            })
        for(var i=1;i<li.length;i++)
            res.push({
                type:li[i] instanceof Array?"dir":"link",
                details:li[i],
            })
        return res
    },
    is_real(hash = location.hash) {
        var det = this.identify(hash)
        return det === false ? false : true
    },
    hash(hash=location.hash){
        if(hash[0]=="#")
            hash=hash.slice(1)
        return hash
    },
    goto(hash=location.hash)
    {
        var arr=this.arr(hash)
        if(arr.length==0)
        {
            location.hash=""
            return
        }
        var res=arr[0]
        for(var i=1;i<arr.length;i++)
            res+="/"+arr[i]
        location.hash=res
        console.log(arr)
    }
}
hash.goto()
export default hash