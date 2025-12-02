import { Zalo } from "zca-js";
import { HttpProxyAgent } from "http-proxy-agent";

const zalo = new Zalo({
    agent: new HttpProxyAgent("http(s)://user:pass@host:port"),
});
