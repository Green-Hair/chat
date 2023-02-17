import url from "@/Serve/url";

import Request from "@/Serve/requests";

export default class Methods{

    private request = new Request();

    //
    public async detail<T>(data: any): Promise<T | string>{
        return this.request.get(url.detail,data)
    }
    
    public async posts<T>(data:any): Promise<T | string>{
        return this.request.post(url.posts,data)
    }
}