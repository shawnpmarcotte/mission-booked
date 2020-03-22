# Mission Booked

Mission Booked is an app that allows user to experience a whole new way to register for Volunteer work. The flow of the page give access to every single person who is willing to volunteer, the home page would let you filter by the they of event and the location of the event, once inside the events page the user would have the option to bookmark an event but only if the current user is sign in. The app will updating to guarantee a good service and to help the planet one Mission at the time.

## Technology being used

- Ruby 2.6.3
- React 16.13
- Javascript packages: axios 0.19
- Ruby gems: administrate, kaminari, react-rails, devise
- Postgres 12.0

## Getting started

- `bundle`
- `rails db:create`
- `rails db:migrate`
- `rails db:seed`
- `rails devise:install`
- `rails s`
- Go to https://localhost:3000

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
