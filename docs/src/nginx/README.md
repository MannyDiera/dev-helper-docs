---
sidebar: auto
---

# Nginx Notes

## Basic & Common Commands
**Check if Nginx is running:**
```shell script
sudo systemctl status nginx
```

**Open Nginx conf**:
```shell script
cd /etc/nginx/sites-available && sudo nano default
```

::: tip
With nano you can start editing the file right away. To save and close, use ctrl+o. 
You can also use ctrl+x and confirm if you'd like to save your changes before closing.
:::
**Now Check if your nginx config is valid:**
```shell script
sudo nginx -t
```

**Restart Nginx after updating the file:**
```shell script
sudo systemctl restart nginx
```

**Disable direct access to a port on your domain**
```shell script
sudo ufw deny 3000
```

## Sample configuration
If you are running an application or applications within your server, you can set named upstreams for each one and then use the location proxy_pass to route outside traffic to that host+port. 

Here is a very basic example:

Assuming I have an app running on localhost:8081, this could be a dev server, docker container or a build of the project being ran with something like [http-server](https://www.npmjs.com/package/http-server).

```shell script
# Add outside of the server block, at the top of the file
upstream myapp {
    server 127.0.0.1:8081;
}

# In your server block
server {
    server_name {your domain} www.{your domain}
    
    location /myapp {
        proxy_pass http://myapp/;
    }
}

```

### Capture and forward route parameters
If you want to forward the path and query parameters to your application, you can use the rewrite rule.
 
Below is an example assuming you'd like to access it when accessing the /api path on your domain and you'd like to pass the params to it.

```shell script
# In your server block
location /api {
    rewrite ^\/api\/(.*) /api/$1 break;
    proxy_pass http://myapp/;
}
```

## References
[Automatic Deployment With Github Actions YouTube](https://www.youtube.com/watch?v=X3F3El_yvFg)

<style>
.theme-default-content pre, .theme-default-content pre[class*="language-"] {
  padding: 1.25rem 1.5rem 0;
}
.code-copy > svg {
   top: 14px;
}
</style>
