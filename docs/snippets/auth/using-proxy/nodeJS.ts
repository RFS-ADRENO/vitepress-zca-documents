import { Zalo } from "zca-js";
import { HttpProxyAgent } from "http-proxy-agent";
import nodefetch from "node-fetch";

const zalo = new Zalo({
    agent: new HttpProxyAgent("http(s)://user:pass@host:port"),
    // @ts-ignore
    polyfill: nodefetch,
});
