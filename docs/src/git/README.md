---
sidebar: auto
---

# Git Notes

## Helpful Commands
**Pull all branches:**
```shell script
remote=origin ; for brname in `git branch -r | grep $remote | grep -v master | grep -v HEAD | awk '{gsub(/^[^\/]+\//,"",$1); print $1}'`; do git branch --track $brname $remote/$brname || true; done 2>/dev/null 
```
-[*Andrew Kroll*](https://github.com/akroll1)

<style>
.theme-default-content pre, .theme-default-content pre[class*="language-"] {
  padding: 1.25rem 1.5rem 0;
}
.code-copy > svg {
   top: 14px;
}
</style>
