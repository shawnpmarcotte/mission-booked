# Mission Booked

Mission Booked is an app that allows user to experience a whole new way to register for Volunteer work. The flow of the page give access to every single person who is willing to volunteer, the home page would let you filter by the they of event and the location of the event, once inside the events page the user would have the option to bookmark an event but only if the current user is sign in. The app will updating to guarantee a good service and to help the planet one Mission at the time.

## Technology being used

- Ruby 2.6.3
- React 16.13
- Javascript packages: axios 0.19
- Ruby gems: administrate, kaminari, react-rails, devise
- Postgres 12.0
- Style: CSS, BootStrap
- Hosted: Heroku

## Getting started

1. `yarn install` to setup the required packages.
2. `bundle install` to setup required gems.
3. `rails db:create` to create your local database.
4. `rails db:migrate`
5. `rails db:seed` to generate the quizzes in your local database.
6. `rails s` to start the server on `localhost:3000`

### Author's

- Shawn Marcotte
- Rene Bleslauer
- Jose Rangel
- Carolina Klein

## Deployment instructions

To deploy, we use Heroku as a web platform:

```
heroku create
git remote -v
heroku buildpacks:set heroku/ruby
heroku buildpacks:add --index 1 heroku/nodejs
git push heroku master
heroku run rake db:migrate
heroku run rake db:seed
```

## Screenshots

![image](https://user-images.githubusercontent.com/59977158/77278456-c6d50e80-6c95-11ea-893c-1493b9197d4b.png)

![image](https://user-images.githubusercontent.com/59977158/77278491-db190b80-6c95-11ea-83c6-32135dd3d7d4.png)
