#!/bin/bash
docker run -d --rm --name watchtower \
-v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once
