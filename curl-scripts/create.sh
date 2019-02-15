curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
            "game": {
              "id": "1",
              "cells": ["","","","","","","","",""],
              "over": false,
              "player_x": {
                "id": "52",
                "email": "'"${EMAIL}"'"
              },
              "player_o": null
            }
          }'
