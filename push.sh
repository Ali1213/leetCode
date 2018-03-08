#!/bin/bash
# date 2018/03/07
if [ ! -n "$1" ]; then
echo "必须带上commit"
exit 1
fi

git add . ;
git commit -m "$1" ;
git push origin master ;