import url from "@/Serve/url";

export default class Request {
    private async getValue(
        method: "POST" | "GET",
        fetchPath: string,
        data: any
    ): Promise<any>{
        
        if(method == "GET"){
            let path: string = fetchPath;
            for(var i in data){
                path += "?"+i+"="+data[i];
                
            }
            return fetch(`${url.baseUrl}${path}`,{
                method,
                headers:{
                    accept: '*',
                    redirect: 'follow',
                    'Content-Type': 'aplication/json'
                },
                mode : 'cors'
            })
            .then(async res => {
                const data = await res.json();
                return data;
            })
            .catch(err => {
                const tempErr = err.toString();
                return Promise.reject(tempErr);
            })
        }
        else if(method == "POST")
        {
            return fetch(`${url.baseUrl}${fetchPath}`,{
                method,
                headers: {
                    accept: "*",
                    "content-type" : "application/json; charset=UTF-8",
                },
                mode:"cors",
    
                body: JSON.stringify(data)
            })
            .then(async res => {
                const data = await res.json();
                return data;
            })
            .catch(err => {
                const tempErr = err.toString();
                return Promise.reject(tempErr);
            })
        }
        
    }

    private async getNoParams(
        method: "GET",
        fetchPath: string,
    ): Promise<any>{
        
        return fetch(`${url.baseUrl}${fetchPath}`,{
            method,
            headers:{
                accept: '*',
                redirect: 'follow',
                'Content-Type': 'aplication/json'
            },
            mode : 'cors'
        })
        .then(async res => {
            console.log(res);
            const data = await res.json();
            return data;
        })
        .catch(err => {
            console.log(err);
            const tempErr = err.toString();
            return Promise.reject(tempErr);
        })
        
    }

    public async post<T>(fetchPath: string, data: any): Promise<T | string>{
        return this.getValue("POST",fetchPath,data)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err));
    }

    public async get<T>(fetchPath: string,data: any): Promise<T | string>{
        if(JSON.stringify(data) == '{}'){
            return this.getNoParams("GET",fetchPath)
                .then(res => Promise.resolve(res))
                .then(err => Promise.reject(err));
        }
        else
        {
            return this.getValue("GET",fetchPath,data)
                .then(res => Promise.resolve(res))
                .catch(err => Promise.reject(err));
        }
        
    }
}