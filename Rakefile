#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
require 'rake/testtask'
require File.expand_path('../config/application', __FILE__)

Mapknitter::Application.load_tasks
namespace :test do
  task all: :environment do
    if ENV['GENERATE_REPORT'] == 'true'
      require 'ci/reporter/rake/test_unit'
      task :testunit => 'ci:setup:testunit'
    end
  end
end
