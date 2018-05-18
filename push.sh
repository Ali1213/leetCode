#!/bin/bash
# date 2018/03/07
# if [ ! -n "$1" ]; then
# echo "必须带上commit"
# exit 1
# fi

# git add . ;
# git commit -m "$1" ;
# git push origin master ;

submitWithComment(){
    git add . ;
    git commit -m "$1" ;
    git push origin master ;
    echo "成功提交";
    # exit 0;
}

submitWithoutComment(){
    git add . ;
    git commit -m "自动提交:$(date +"%Y/%m/%d %H:%M:%S")" ;
    git push origin master ;
    echo "成功提交";
    # exit 0;
}

setUserNameAndEmail(){
    git config user.name "$1";
    git config user.email "$2";
}


setUserNameAndEmailGitHub(){
    setUserNameAndEmail "Ali1213" "yusili2000@163.com"
}

setUserNameAndEmailUcloudGitlab(){
    setUserNameAndEmail "siliyu" "ali.yu@ucloud.cn"
}

if [ -n "$1" ]; then 
    submitWithComment;
else
    PS3='Please choose your number: ' # 设置提示符字串.  
    echo
    select number in "自动提交" "设置用户名和邮箱为github" "设置用户名和邮箱为ucloud"
    do  
        case $number in
        "自动提交")
            submitWithoutComment
            exit 0 
        ;;
        "设置用户名和邮箱为github")
            setUserNameAndEmailGitHub
            exit 0 
        ;;
        "设置用户名和邮箱为ucloud")
            setUserNameAndEmailUcloudGitlab
            exit 0 
        ;;
        *)
            exit 0
        ;; 
        esac
    done 
fi