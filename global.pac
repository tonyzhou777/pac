var proxy="SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT",mode="global";function ip2decimal(e){var n=e.split(".");return 256*(256*(256*+n[0]+ +n[1])+ +n[2])+ +n[3]}function FindProxyForURL(e,n){return/\d+\.\d+\.\d+\.\d+/.test(n)&&(isInNet(dnsResolve(n),"10.0.0.0","255.0.0.0")||isInNet(dnsResolve(n),"172.16.0.0","255.240.0.0")||isInNet(dnsResolve(n),"192.168.0.0","255.255.0.0")||isInNet(dnsResolve(n),"127.0.0.0","255.255.255.0"))?"DIRECT":isPlainHostName(n)?"DIRECT":"global"==mode?proxy:void 0}