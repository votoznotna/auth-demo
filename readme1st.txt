brew services start mongodb-community@7.0
brew services stop mongodb-community@7.0

mongod --config /opt/homebrew/etc/mongod.conf --fork

https://medium.com/@minoffline/how-to-install-mongodb-on-macos-locally-in-2023-ab84140ae595
sudo cp /Users/antonzotov/Downloads/mongodb-macos-aarch64-7.0.5/bin/* /usr/local/bin/

sudo mkdir -p ~/data/log/mongodb
sudo chown antonzotov ~/data/db

sudo chown antonzotov ~/data/log/mongodb

mongod --dbpath ~/data/db --logpath ~/data/log/mongodb/mongo.log --fork

ps aux | grep -v grep | grep mongod

// mongodb ui: https://www.mongodb.com/try/download/compass