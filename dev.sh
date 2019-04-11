#!/bin/sh

#rm -Rf node_modules && rm yarn.lock &&

tmux \
    new-session  'yarn start:front' \; \
    split-window 'yarn start:back' \; # \
#    detach-client