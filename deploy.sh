#!/bin/bash

#Uncomment for debugging this script
set -x

clear

if [ $# -eq 0 ]
then    
    echo 'Usage: ./deploy.sh [clean|git|deploy|all] <commit message>'
    exit 1;
fi

case "$1" in
    'clean')
        echo 'Cleaning all the temp files'
        find ./ -name '*~' -exec rm '{}' \; -print
        ;;
    'git')
        if [ $# -eq 1 ] 
        then
            echo 'Please provide commit message'
            echo 'Usage: ./deploy.sh <clean|git|deploy|all> <commit message>'
            exit 1;
        else
            git add --all
            git commit -m "$2"
            git push origin master
        fi  
        ;;
    'deploy')
        stackato target https://api.runq.qualcomm.com
        stackato push -n
        ;;
    'all')
       echo 'Cleaning all the temp files'
        find ./ -name '*~' -exec rm '{}' \; -print
        if [ $# -eq 1 ] 
        then
            echo 'Please provide commit message'
            echo 'Usage: ./deploy.sh <clean|git|deploy|all> <commit message>'
            exit 1;
        else
            git add --all
            git commit -m "$2"
            git push origin master
        fi  
        stackato target https://api.runq.qualcomm.com
        stackato push -n
        ;;
    *)
        echo 'I couldnt understand your request'
        echo 'Usage: ./deploy.sh [clean|git|deploy|all] <commit message>'
        exit 1;
        ;;
esac

