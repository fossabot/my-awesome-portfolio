#!/bin/sh

#rm -Rf node_modules && rm yarn.lock &&

tmux \
    new-session  'yarn; yarn start:front' \; \
    split-window 'yarn; yarn start:back' \; # \
#    detach-client