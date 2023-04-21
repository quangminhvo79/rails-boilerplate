# README

## Software require
- Ruby 3.1.2
- Postgresql 14
- Redis
- Chromedriver
- imagemagick, wkhtmltopdf

## Stacks
- Rails7
- TailwindCSS
- Hotwired (Stimulus and Turbo)
- Rspec, [Fixtures data](https://api.rubyonrails.org/v7.0.3/classes/ActiveRecord/FixtureSet.html)
- Capybara
- REST API - OAuth2.0
- [View Component](https://github.com/mtcld/die-reguliere/blob/develop/app/components/readme.md)
- [Filter Engine](https://github.com/mtcld/die-reguliere/blob/develop/app/services/filters/readme.md)

## Developement

### Example

### Trigger a DOM event from server

### Use rails commandlines

```ruby
rails g model User
rails g controller User
rails g component User
rails g mailer User
```
### Rspec

Please follow [Rspec](https://relishapp.com/rspec/rspec-rails/v/5-1/docs/). For example:
- Spec a [mailer](https://relishapp.com/rspec/rspec-rails/v/5-1/docs/mailer-specs)
- Spec a [controller](https://relishapp.com/rspec/rspec-rails/v/5-1/docs/request-specs/request-spec)

### Multi languages (I18n locales)

```ruby
config/locales/
├── components
│             ├── de.yml
│             └── en.yml
├── controllers
│             ├── de.yml
│             └── en.yml
├── devise.en.yml
├── doorkeeper.en.yml
└── models
    ├── de.yml
    └── en.yml
```

If you need the default messages of rails, please check out [here](https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale)

### Data seeding
You're should add the needed data into this file when implementing a new feature to make it run correct on local machine.

For first time or you want to reload demo data, just do:
```ruby
rake db:truncate_all db:fixtures:load db:seed
```

### Run server
```ruby
bin/dev
```

## Update swagger specification - Redoc
Edit file `swagger/v1/swagger.yaml` then run
```
redoc-cli build swagger/v1/swagger.yaml --options.theme.colors.primary.main=#052da6 -t swagger/templates/stand_alone.hbs && pbcopy < redoc-static.html
```
Open file `app/views/rswag/ui/home/index.html.erb` go to block
```ruby
<!-- REDOC -->
# paste clipboard here
<!-- END REDOC -->
```
